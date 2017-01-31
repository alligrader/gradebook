// @flow

import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import Paths from './helpers/path_helper';
import HomePage from './components/home_page';
import AboutPage from './components/about_page';
import ContactPage from './components/contact_page';


import IndexPage from './components/index_page';

import ProfilesPage from './components/profiles_page';
import CoursesPage from './components/courses_page';
import AssignmentsPage from './components/assignments_page';

import ShowProfilePage from './components/show_profile_page';
import ShowCoursePage from './components/show_course_page';
import ShowAssignmentPage from './components/show_assignment_page';


export default(
    <Router history={ browserHistory } >

        <Route path={ Paths.index.path            }  component={ IndexPage }       />
        <Route path={ Paths.home.path             }  component={ HomePage }        />
        <Route path={ Paths.about.path             }  component={ AboutPage }        />
        <Route path={ Paths.contact.path             }  component={ ContactPage }        />

        <Route path={ Paths.profiles.path         }  component={ ProfilesPage }     />
        <Route path={ Paths.show_profile.path     }  component={ ShowProfilePage }     />

        <Route path={ Paths.courses.path          }  component={ CoursesPage }     />
        <Route path={ Paths.show_course.path      }  component={ ShowCoursePage }  />

        <Route path={ Paths.assignments.path      }  component={ AssignmentsPage } />
        <Route path={ Paths.show_assignment.path  }  component={ ShowAssignmentPage } />

    </Router>
);
