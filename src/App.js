import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Loading from './components/Loading';
import history from './utils/History';
import NavBar from './components/NavBar';
import Home from './views/Home';
import { InitBestPicture } from './init/GetMovies';

// styles
import './App.css';

// fontawesome
import initFontAwesome from './utils/InitFontAwesome';

initFontAwesome();

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh)',
        width: '100%',
        padding: '0px',
        margin: '0px',

        flexDirection: 'column',

        backgroundColor: theme.palette.secondary.main,
    },
}));

const App = () => {
    const classes = useStyles();
    const { isLoading, error } = useAuth0();

    if (error) {
        return <div>Oops... {error.message}</div>;
    }
    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <InitBestPicture />
            <Router history={history}>
                <div id="app" className={classes.root}>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;
