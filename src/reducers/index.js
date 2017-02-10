// @flow
import { combineReducers } from 'redux';
import GetRepos from './reducer_repolist';

const rootReducer = combineReducers({
    repos: GetRepos,
 });

export default rootReducer;
