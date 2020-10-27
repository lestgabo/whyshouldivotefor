import { ActionTypes } from '../../utils/Constants';

// export const signUp = (newUser) => {
//     return (dispatch, getState, { getFirebase }) => {
//         const firebase = getFirebase();
//         const firestore = getFirebase().firestore();
//         console.log('hello from signUp!');

//         // firebase.auth().signInWithCustomToken(token).catch(function (error) {
//         //     let errorCode = error.code;
//         //     let errorMessage = error.message;

//         //     console.log('errorCode', errorCode, '----', 'errorMessage', errorMessage)
//         // })
//     };
// };

// eslint-disable-next-line import/prefer-default-export
export const saveCustomToken = (payload) => (
    (dispatch, getState, { getFirebase }) => {
        const getAccessTokenSilently = payload;
        // first time login ?
        // login button clicked -> do Auth0 stuff
        // use Auth0 token to get a firebase custom token
        // use firebase custom token to login into firebase
        // when logging into firebase, create user if it doesn't exist
        // console.log('hello from saveCustomToken');
        // console.log('getAccessTokenSilently ->', getAccessTokenSilently);
        // netlify function server
        const apiOrigin = 'http://localhost:9000/.netlify/functions/server';

        const callApiFB = async () => {
            try {
                const token = await getAccessTokenSilently();

                const response = await fetch(`${apiOrigin}/api/auth/firebase`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const responseData = await response.json();

                dispatch({ type: ActionTypes.SAVE_CUSTOM_TOKEN, data: responseData });
            } catch (error) {
                console.log(error);
            }
        };
        callApiFB();
    }
);
