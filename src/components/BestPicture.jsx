import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        height: '90vh',
    },
}));

const BestPicture = () => {
    const classes = useStyles();
    const moviesBestPicture = useSelector((state) => state.movies.moviesBestPicture);

    return (
        <div className={classes.root}>
            <div>hello from Best picture</div>
            <p>
                {
                    moviesBestPicture && moviesBestPicture.map((movie) => (
                        <>
                            <p>{movie[0]}</p>
                            {/* <p>{movieData.plot}</p> */}
                        </>
                    ))
                }
            </p>
        </div>
    );
};

export default BestPicture;
