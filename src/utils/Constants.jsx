import keyMirror from './KeyMirror';

export const ActionTypes = keyMirror({
    SIGNUP_SUCCESS: null,
    SIGNUP_ERROR: null,
    LOGIN_SUCCESS: null,
    LOGIN_ERROR: null,
    LOGOUT_SUCESS: null,

    SAVE_CUSTOM_TOKEN: null,

    GET_MOVIE_DATA: null,
});

export const Site = {
    TITLE: 'Should Have Won It That Year',
    NETLIFY_FUNCTION_SERVER: 'http://localhost:9000/.netlify/functions/server',
    MOVIE_SERVER_DEV: 'http://localhost:9002',
};

export const EnvironmentVariables = {
    omdbKey: process.env.REACT_APP_OMDB_KEY,
    omdbURL: process.env.REACT_APP_OMDB_URL,
};
