import { ActionTypes } from '../../utils/Constants';

const initState = {
    moviesAll: [],
    moviesBestPicture: [],
    year: null,
    category: null,
};

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.GET_MOVIES_DATA:
            return {
                ...state,
                moviesAll: action.movies,
            };
        case ActionTypes.GET_MOVIES_BEST_PICTURE:
            return {
                ...state,
                moviesBestPicture: action.movies,
                category: action.category,
                year: action.year,
            };
        default:
            return state;
    }
};

export default movieReducer;
