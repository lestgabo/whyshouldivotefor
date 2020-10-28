import { ActionTypes } from '../../utils/Constants';

const initState = {
    authError: null,
    customToken: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_ERROR:
            return {
                ...state,
                authError: 'Login Failed',
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                authError: null,
            };
        case ActionTypes.LOGOUT_SUCESS:
            return {
                ...state,
            };
        case ActionTypes.SIGNUP_SUCCESS:
            // console.log('Action type ->', action.type);
            return {
                ...state,
                authError: null,
            };
        case ActionTypes.SIGNUP_ERROR:
            // console.log('Action type ->', action.type);
            return {
                ...state,
                authError: action.err.message,
            };
        case ActionTypes.SAVE_CUSTOM_TOKEN:
            return {
                ...state,
                customToken: action.data.firebaseToken,
            };
        default:
            return state;
    }
};

export default authReducer;
