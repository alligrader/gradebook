// @flow
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import ReposReducer from './reducer_repos';
import { authStateReducer } from "redux-auth";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    repos: ReposReducer,
    auth: authStateReducer,
 });

export const store = compose(
    applyMiddleware(thunk),
    // ... add additional middleware here (router, etc.)
)(createStore)(rootReducer);

export default rootReducer;
