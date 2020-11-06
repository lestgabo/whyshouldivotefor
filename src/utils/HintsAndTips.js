/** add into a collections

firestore
.collection('movies')
.add({
    property: firestore.doc(``)
});

*/

/** query movies with specific parameter

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
