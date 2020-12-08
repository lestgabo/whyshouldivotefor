import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';

import rootReducer from './RootReducer';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getFirebase }))));
