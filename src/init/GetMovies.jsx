/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { db } from '../utils/FirebaseConfig';
import { getMoviesData } from '../store/actions/MovieActions';

const InitMovies = () => {
    const dispatch = useDispatch();
    // const [movies, setMovies] = useState();

    useEffect(() => {
        const category = 'best-picture';
        const year = '2019';

        const moviesDataRef = async () => {
            const moviesRef = db.collection(category).doc(year);
            const doc = await moviesRef.get();
            if (!doc.exists) {
                console.log('No such documents.');
            } else {
                dispatch(getMoviesData({ movies: doc.data() }));
            }
        };
        moviesDataRef();
    }, [dispatch]);

    return null;
};

export default InitMovies;
