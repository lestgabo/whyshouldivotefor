import { ActionTypes } from '../../utils/Constants';

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();
        console.log('hello from signUp!');

        // firebase.auth().signInWithCustomToken(token).catch(function (error) {
        //     let errorCode = error.code;
        //     let errorMessage = error.message;

        //     console.log('errorCode', errorCode, '----', 'errorMessage', errorMessage)
        // })
    };
};

export const saveToken = data => {
    return (dispatch, getState, { getFirebase, getFirestore }) => ({
        type: ActionTypes.SAVE_CUSTOM_TOKEN,
        value: data,
    });
};
