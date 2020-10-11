require('dotenv').config();

module.exports = {
    FIREBASE_KEY: {
        type: process.env.REACT_APP_SAK_TYPE,
        project_id: process.env.REACT_APP_SAK_PROJECT_ID,
        private_key_id: process.env.REACT_APP_SAK_PRIVATE_KEY_ID,
        private_key: process.env.REACT_APP_SAK_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.REACT_APP_SAK_CLIENT_EMAIL,
        client_id: process.env.REACT_APP_SAK_CLIENT_ID,
        auth_uri: process.env.REACT_APP_SAK_AUTH_URI,
        token_uri: process.env.REACT_APP_SAK_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.REACT_APP_SAK_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.REACT_APP_SAK_X509_CERT_URL,
    },
    FIREBASE_DB: process.env.REACT_APP_FB_DATABASE_URL,
    AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
    AUTH0_CLIENTID: process.env.REACT_APP_AUTH0_CLIENTID,
    AUTH0_AUDIENCE: process.env.REACT_APP_AUTH0_AUDIENCE,
};
