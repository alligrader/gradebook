// @flow

import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import {Enum} from 'enumify';

import HomePage from './components/home_page';
import IndexPage from './components/index_page';
import ProfilePage from './components/profile_page';
import CoursesPage from './components/courses_page';
import AssignmentsPage from './components/assignments_page';

// This guy gives us a nice and pretty enum for debugging purposes. We should probably just this into a helper file so other pages can import it to create links.
class Path extends Enum {}
Path.initEnum({
    index: {
        get path() { return '/'; },
    },

    home: {
        get path() { return '/home'; },
    },

    profiles: {
        get path() { return '/profiles'; },
    },

    courses: {
        get path() { return '/courses'; },
    },

    assignments: {
        get path() { return '/assignments'; },
    },

});

export default(
    <Router history={ browserHistory } >

        <Route path={ Path.index.path       }  component={ IndexPage } />
        <Route path={ Path.home.path        }  component={ HomePage } />
        <Route path={ Path.profiles.path    }  component={ ProfilePage } />
        <Route path={ Path.courses.path     }  component={ CoursesPage } />
        <Route path={ Path.assignments.path }  component={ AssignmentsPage } />

    </Router>
);
