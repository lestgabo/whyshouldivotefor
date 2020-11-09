import { ActionTypes } from '../../utils/Constants';

const initState = {
    moviesAll: [],
};

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.GET_MOVIES_DATA:
            return {
                ...state,
                moviesAll: action.movies,
            };
        default:
            return state;
    }
};

export default movieReducer;
