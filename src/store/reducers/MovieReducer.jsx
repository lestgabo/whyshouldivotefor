import { ActionTypes } from '../../utils/Constants';

const initState = {
    movie: {},
};

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.GET_MOVIE_DATA:
            return {
                ...state,
                movie: action.data.movie,
            };
        default:
            return state;
    }
};

export default movieReducer;
