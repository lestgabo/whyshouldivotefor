/**
 * add into a collections

firestore
.collection('movies')
.add({
    property: firestore.doc(``)
});

*/

/**
 * query for collections with options

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
 * query for collections with options AND add each data object into another collection

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
