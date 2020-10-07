import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from '@auth0/auth0-react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { authConfig } from './utils/authConfig';

const theme = createMuiTheme({
    typography: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    palette: {
        primary: {
            main: '#3c3b6e',
            light: '#77769A',
        },
        secondary: {
            main: '#b22234',
            light: '#C96471',
        },
    },
});

ReactDOM.render(
    <Auth0Provider domain={authConfig.domain} clientId={authConfig.clientId} audience={authConfig.audience} redirectUri={window.location.origin}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Auth0Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
