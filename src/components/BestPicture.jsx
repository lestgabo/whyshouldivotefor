import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';

import MovieCard from './cards/MovieCard';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: blue[500],
        height: '90vh',
    },
}));

const BestPicture = () => {
    const classes = useStyles();
    const moviesBestPicture = useSelector((state) => state.movies.moviesBestPicture);

    return (
        <Grid container className={classes.root} spacing={3} direction="row" justify="center" alignItems="space-evenly">
            {
                moviesBestPicture && moviesBestPicture.map((movie) => (
                    <>
                        <Grid item xs={4}>
                            <MovieCard movie={movie} />
                        </Grid>
                    </>
                ))
            }
        </Grid>
    );
};

export default BestPicture;
