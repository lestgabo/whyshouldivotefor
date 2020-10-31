/* eslint-disable no-console */
import { ActionTypes, Site } from '../../utils/Constants';

// eslint-disable-next-line import/prefer-default-export
export const getMovieData = (payload) => (
    (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();
        const { getAccessTokenSilently } = payload;
        const apiOrigin = Site.MOVIE_SERVER_DEV;

        const movieName = 'let the right one in';

        const callImdbApi = async () => {
            try {
                const token = await getAccessTokenSilently();

                const response = await fetch(`${apiOrigin}/movie`, {
                    method: 'post',
                    headers: { Authorization: `Bearer ${token}` },
                    body: JSON.stringify({
                        movie: movieName,
                    })
                });
                const responseData = await response.json();

                console.log('response from callImdbApi -> ', responseData);
            } catch (error) {
                console.log(error);
            };
        };
        callImdbApi();
    }
);
