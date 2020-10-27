import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux';

import { db } from '../utils/FirebaseConfig';
// import { saveToken } from '../store/actions/AuthActions';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FFFFFF',
        height: '90vh',
    },
}));

// old default
// const apiOrigin = 'http://localhost:3001';
// netlify function server
const apiOrigin = 'http://localhost:9000/.netlify/functions/server';

const Home = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        showResult: false,
        apiMessage: '',
        error: null,
    });
    const dispatch = useDispatch();

    const { getAccessTokenSilently, loginWithPopup, getAccessTokenWithPopup } = useAuth0();

    const handleConsent = async () => {
        try {
            await getAccessTokenWithPopup();
            setState({
                ...state,
                error: null,
            });
        } catch (error) {
            setState({
                ...state,
                error: error.error,
            });
        }
        await callApi();
    };

    const handleLoginAgain = async () => {
        try {
            await loginWithPopup();
            setState({
                ...state,
                errro: null,
            });
        } catch (error) {
            setState({
                ...state,
                error: error.error,
            });
        }
        await callApi();
    };

    const callApi = async () => {
        try {
            const token = await getAccessTokenSilently();

            const response = await fetch(`${apiOrigin}/api/external`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const responseData = await response.json();

            setState({
                ...state,
                showResult: true,
                apiMessage: responseData,
            });
        } catch (error) {
            setState({
                ...state,
                error: error.error,
            });
        }
    };

    const callApiFB = async () => {
        try {
            const token = await getAccessTokenSilently();

            const response = await fetch(`${apiOrigin}/api/auth/firebase`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const responseData = await response.json();

            setState({
                ...state,
                showResult: true,
                apiMessage: responseData,
            });
            // dispatch(saveToken(responseData))
        } catch (error) {
            setState({
                ...state,
                error: error.error,
            });
        }
    };

    const handle = (e, fn) => {
        e.preventDefault();
        fn();
    };

    return (
        <div className={classes.root}>
            <div className="mb-5">
                {state.error === 'consent_required' && (
                    <Alert severity="warning">
                        You need to{' '}
                        <a href="#/" class="alert-link" onClick={(e) => handle(e, handleConsent)}>
                            consent to get access to users api
                        </a>
                    </Alert>
                )}

                {state.error === 'login_required' && (
                    <Alert severity="warning">
                        You need to{' '}
                        <a href="#/" class="alert-link" onClick={(e) => handle(e, handleLoginAgain)}>
                            log in again
                        </a>
                    </Alert>
                )}

                <h1>External API</h1>
                <p>
                    Ping an external API by clicking the button below. This will call the external API using an access token, and the API will
                    validate it using the API's audience value.
                </p>

                <Button variant="contained" color="secondary" onClick={callApi}>
                    Ping API
                </Button>
                <Button variant="contained" color="secondary" onClick={callApiFB}>
                    Ping API Firebase
                </Button>
            </div>

            <div className="result-block-container">
                {state.showResult && (
                    <div className="result-block" data-testid="api-result">
                        <h6 className="muted">Result</h6>
                        <span>{JSON.stringify(state.apiMessage, null, 2)}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
