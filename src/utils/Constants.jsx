import keyMirror from './KeyMirror';

// keyMirror just copies the the key into the value
export const ActionTypes = keyMirror({
    SIGNUP_SUCCESS: null,
    SIGNUP_ERROR: null,
    LOGIN_SUCCESS: null,
    LOGIN_ERROR: null,
    LOGOUT_SUCESS: null,

    SAVE_CUSTOM_TOKEN: null,

    GET_MOVIES_DATA: null,
    GET_MOVIES_BEST_PICTURE: null,
});

export const Site = {
    TITLE: "Should've Won That Year",
    NETLIFY_FUNCTION_SERVER: 'http://localhost:9000/.netlify/functions/server',
    MOVIE_SERVER_DEV: 'http://localhost:9002',
};

export const EnvironmentVariables = {
    omdbKey: process.env.REACT_APP_OMDB_KEY,
    omdbURL: process.env.REACT_APP_OMDB_URL,
};
