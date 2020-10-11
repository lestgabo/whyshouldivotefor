const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const firebaseAdmin = require('firebase-admin');

const config = require('./config');

const app = express();

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = config.AUTH0_APPORIGIN || `http://localhost:${appPort}`;

if (!config.AUTH0_DOMAIN || !config.AUTH0_AUDIENCE) {
    throw new Error('Please make sure that auth_config.json is in place and populated');
}

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: appOrigin }));

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`,
    }),

    audience: config.AUTH0_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithms: ['RS256'],
});

app.get('/api/external', checkJwt, (req, res) => {
    res.send({
        msg: 'Your access token was successfully validated!',
    });
});

const serviceAccount = config.FIREBASE_KEY;
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: config.FIREBASE_DB,
});

app.get('/auth/firebase', checkJwt, (req, res) => {
    const uid = req.user.sub;
    firebaseAdmin
        .auth()
        .createCustomToken(uid)
        .then((customToken) => res.json({ firebaseToken: customToken }))
        .catch((err) => res.status(500).send({ message: 'Something went wrong acquiring a Firebase token.', error: err }));
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
