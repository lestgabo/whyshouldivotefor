import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';

import rootReducer from './RootReducer';

const initialState = {};

export default () => {
    return createStore(rootReducer, initialState, compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))));
};
