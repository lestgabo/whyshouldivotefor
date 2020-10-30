import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';

import rootReducer from './RootReducer';

const initialState = {};

export default () => createStore(rootReducer, initialState, compose(applyMiddleware(thunk.withExtraArgument({ getFirebase }))));
