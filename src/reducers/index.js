// @flow
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import ReposReducer from './reducer_repos';
import CheckstyleReducer from './reducer_checkstyle';

import { authStateReducer } from "redux-auth";
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise';

const rootReducer = combineReducers({
    repos: ReposReducer,
    style_props: CheckstyleReducer,
    auth: authStateReducer,
 });

export const store = compose(
    applyMiddleware(thunk),
    applyMiddleware(promiseMiddleware),
    // ... add additional middleware here (router, etc.)
)(createStore)(rootReducer);

export default rootReducer;
