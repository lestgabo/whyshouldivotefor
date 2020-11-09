/* eslint-disable no-console */
import { ActionTypes, Site } from '../../utils/Constants';

// eslint-disable-next-line import/prefer-default-export
export const getMovieData = (payload) => (
    (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();
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

export const getMoviesData = (payload) => (
    (dispatch) => {
        const { movies } = payload;
        // convert object into array -> array of movies each with index 0 = title and index 1 = movie data
        const moviesArray = Object.entries(movies);
        // console.log(ActionTypes.GET_MOVIES_DATA)
        dispatch({ type: ActionTypes.GET_MOVIES_DATA, movies: moviesArray });
    }
);
