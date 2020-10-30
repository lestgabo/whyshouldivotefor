import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        height: '90vh',
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>hello from Best picture</div>
        </div>
    );
};

export default Home;
