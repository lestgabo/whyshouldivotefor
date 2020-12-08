/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { db } from '../utils/FirebaseConfig';
import { getMoviesDataAll, getMoviesDataFromCategoryYear } from '../store/actions/MovieActions';
import Loading from '../components/Loading';

export const InitAllMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const moviesRef = db.collection('movies');
            const doc = await moviesRef.get();
            if (!doc.exists) {
                console.log('No such documents.');
            } else {
                dispatch(getMoviesDataAll({ moviesAll: doc.data() }));
            }
        };
        fetchData();
    }, [dispatch]);
};

export const InitBestPicture = () => {
    const [data, setData] = useState(null);
    const dispatch = useDispatch();
    const category = 'best-picture';
    const year = '2019';

    useEffect(() => {
        const fetchData = async () => {
            const moviesRef = db.collection(category).doc(year);
            const doc = await moviesRef.get();
            if (!doc.exists) {
                console.log('No such documents.');
            } else {
                setData(doc.data());
            }
        };
        fetchData();
    }, [dispatch]);

    if (data) {
        dispatch(getMoviesDataFromCategoryYear({ category, year, movies: data }));
        return null;
    }

    if (!data) {
        return <Loading />;
    }

    return null;
};
