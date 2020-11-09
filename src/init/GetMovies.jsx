/* eslint-disable no-console */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { db } from '../utils/FirebaseConfig';
import { getMoviesDataAll, getMoviesDataFromCategoryYear } from '../store/actions/MovieActions';

export const InitAllMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const moviesAll = async () => {
            const moviesRef = db.collection('movies');
            const doc = await moviesRef.get();
            if (!doc.exists) {
                console.log('No such documents.');
            } else {
                dispatch(getMoviesDataAll({ moviesAll: doc.data() }));
            }
        }
        moviesAll();
    }, [dispatch]);
};

export const InitBestPicture = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const category = 'best-picture';
        const year = '2019';

        const moviesCategoryYear = async () => {
            const moviesRef = db.collection(category).doc(year);
            const doc = await moviesRef.get();
            if (!doc.exists) {
                console.log('No such documents.');
            } else {
                dispatch(getMoviesDataFromCategoryYear({ category, year, movies: doc.data() }));
            }
        };
        moviesCategoryYear();
    }, [dispatch]);

    return null;
};
