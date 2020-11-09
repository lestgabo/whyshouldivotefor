/**
 ** add into a collections

    firestore
        .collection('movies')
        .add({
            property: firestore.doc(``)
        });

*/

/**
 ** query for collections with options

     const getMovies = async () => {
        const citiesRef = db.collection('movies');
        const snapshot = await citiesRef.where('_yearData', '==', '2019').get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }

        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
        });
    };
    getMovies();

 */

/**
 ** query for collections with options AND add each data object into another collection

    const getMovies = async () => {
        const citiesRef = db.collection('movies');
        const snapshot = await citiesRef.where('_yearData', '==', '2019').get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }

        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            const addIntoCategory = async () => {
                const bestPictureRef = db.collection('best-picture').doc('2019');
                const res = await bestPictureRef.set({
                    [doc.id]: doc.data(),
                }, { merge: true });
            }
            addIntoCategory();
        });
    };
    getMovies();

 */

/**
  ** get movie data from imdb-api using own node server

    export const getMovieDataFromCustomApi = (payload) => (
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

*/
