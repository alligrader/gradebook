// @flow

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/home';
import Index from './components/index';
import ProfilePage from './components/profilePage';

import { Router, browserHistory } from 'react-router';
import routes from './router'

export default(
    <Router history={browserHistory} routes={routes} >
        <Route path="/"         component={ Index } />
        <Route path="/home"     component={ Home } />
        <Route path="/profiles" component={ ProfilePage } />
    </Router>
);
