import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const Loading = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgress color="secondary" />
        </div>
    );
};

export default Loading;
