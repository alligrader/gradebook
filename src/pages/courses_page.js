// @flow

import React from 'react';
import Navbar from './navbar'

// This page shows all of the courses the user is teaching (or a student in).
// On component mount, create an action to load all of the courses.
export default () => {
    return (
        <div>
            <Navbar />
            This is the courses page.
        </div>
    );
};
