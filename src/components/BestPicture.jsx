import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import { EnvironmentVariables } from '../utils/Constants';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        height: '90vh',
    },
}));

const BestPicture = () => {
    const classes = useStyles();
    const [move, setMovie] = useState()

    useEffect(() => {
        // console.log(EnvironmentVariables)
        // console.log(EnvironmentVariables.omdbKey)
        // imdb.get({ name: 'Ford v Ferrari' }, { apiKey: EnvironmentVariables.omdbKey, timeout: 30000 }).then(console.log).catch(console.log);

    }, []);

    const getMovie = () => {
        axios(`${EnvironmentVariables.omdbURL}&s=lord of the rings return of the king`).then(({ data }) => {
            console.log('movie ->', data);
        });
    }

    getMovie();

    return (
        <div className={classes.root}>
            <div>hello from Best picture</div>
        </div>
    );
};

export default BestPicture;
