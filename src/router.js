// @flow

import React from 'react';
import { Route, Router, browserHistory } from 'react-router';

import Paths from './helpers/path_helper';

// Import all pages
import Home from './pages/home_page';
import Index from './pages/index_page';
import Profiles from './pages/profiles_page';
import Courses from './pages/courses_page';
import Assignments from './pages/assignments_page';
import ShowProfile from './pages/show_profile_page';
import ShowCourse from './pages/show_course_page';
import ShowAssignment from './pages/show_assignment_page';
import CreateAccount from './pages/create_account';
import MyProjects from './pages/my_projects';
import BugProfiles from './pages/bug_profiles';

export default(
    <Router history={ browserHistory } >

        <Route path={ Paths.index.path            }  component={ Index }          />
        <Route path={ Paths.home.path             }  component={ Home }           />
        <Route path={ Paths.create_account.path   }  component={ CreateAccount }  />


        <Route path={ Paths.my_projects.path         }  component={ MyProjects }       />
        <Route path={ Paths.bug_profiles.path     }  component={ BugProfiles }    />

        <Route path={ Paths.profiles.path         }  component={ Profiles }       />
        <Route path={ Paths.show_profile.path     }  component={ ShowProfile }    />

        <Route path={ Paths.courses.path          }  component={ Courses }        />
        <Route path={ Paths.show_course.path      }  component={ ShowCourse }     />

        <Route path={ Paths.assignments.path      }  component={ Assignments }    />
        <Route path={ Paths.show_assignment.path  }  component={ ShowAssignment } />

    </Router>
);
