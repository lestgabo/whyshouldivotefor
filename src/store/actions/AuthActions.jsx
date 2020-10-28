import { ActionTypes, Site } from '../../utils/Constants';

export const signUp = (newUser) => (
    (dispatch, getState, { getFirebase }) => {
        // const firebase = getFirebase();
        // const firestore = getFirebase().firestore();
        // const token = getState.auth.customToken;
        // console.log('hello from signUp!');
        // console.log('token ->', token);
    }
);

// firebase.auth().signInWithCustomToken(token).catch(function(error){
//     let errorCode = error.code;
//     let errorMessage = error.message;

//     console.log('errorCode', errorCode, '----', 'errorMessage', errorMessage)

// })

// eslint-disable-next-line import/prefer-default-export
export const auth0ToFirebase = (payload) => (
    (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();
        const { getAccessTokenSilently, user } = payload;

        // first time login ?
        // login button clicked -> do Auth0 stuff
        // use Auth0 token to get a firebase custom token
        // use firebase custom token to login into firebase
        // when logging into firebase, create user if it doesn't exist

        // netlify function server
        const apiOrigin = Site.NETLIFY_FUNCTION_SERVER;

        const callApiFB = async () => {
            try {
                const token = await getAccessTokenSilently();

                const response = await fetch(`${apiOrigin}/api/auth/firebase`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const responseData = await response.json();

                dispatch({ type: ActionTypes.SAVE_CUSTOM_TOKEN, data: responseData });

                // login auth0 user into firebase
                firebase.auth().signInWithCustomToken(responseData.firebaseToken)
                    .then(() => {
                        firebase.auth().currentUser.updateEmail(user.email);
                    })
                    .then(() => {
                        firestore
                            .collection('users')
                            .doc(user.sub)
                            .set(
                                {
                                    email: user.email,
                                    name: user.name,
                                },
                                { merge: true },
                            );
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log('errorCode', errorCode, '----', 'errorMessage', errorMessage);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        callApiFB();
    }
);
