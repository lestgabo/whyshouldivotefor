import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Loading from './components/Loading';
import history from './utils/history';
import NavBar from './components/NavBar';
import Home from './views/Home';

// styles
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: '0px',
        margin: '0px',

        minHeight: '100vh',
        flexDirection: 'column',
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
        <Router history={history}>
            <NavBar />
            <div id="app" className={classes.root}>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
