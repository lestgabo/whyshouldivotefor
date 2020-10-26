export const signUp = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().signInWithCustomToken(token).catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;

            console.log('errorCode', errorCode, '----', 'errorMessage', errorMessage)
        })
    }
}
