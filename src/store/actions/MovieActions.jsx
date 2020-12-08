/* eslint-disable no-console */
import { ActionTypes, Site } from '../../utils/Constants';

export const getMovieDataFromCustomApi = (payload) => (
    () => {
        const { getAccessTokenSilently } = payload;
        const apiOrigin = Site.MOVIE_SERVER_DEV;

        const movieToGet = 'Once Upon a Time... In Hollywood';

        const callImdbApi = async () => {
            try {
                const token = await getAccessTokenSilently();

                const response = await fetch(`${apiOrigin}/movie`, {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                    body: JSON.stringify({
                        movie: movieToGet,
                    }),
                });
                const responseData = await response.json();

                console.log('response from callImdbApi -> ', responseData.response);
            } catch (error) {
                console.log(error);
            }
        };
        callImdbApi();
    }
);

export const getMoviesDataAll = (payload) => (
    (dispatch) => {
        const { movies } = payload;
        // convert object into array -> array of movies each with index 0 = title and index 1 = object data of movie
        const moviesArray = Object.entries(movies);
        dispatch({ type: ActionTypes.GET_MOVIES_DATA, movies: moviesArray });
    }
);

export const getMoviesDataFromCategoryYear = (payload) => (
    (dispatch) => {
        const { category, year, movies } = payload;
        // convert object into array -> array of movies each with index 0 = title and index 1 = object data of movie
        const moviesArray = Object.entries(movies);
        dispatch({ type: ActionTypes.GET_MOVIES_BEST_PICTURE, category, year, movies: moviesArray });
    }
);
