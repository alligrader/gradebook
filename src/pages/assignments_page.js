// @flow

import React from 'react';
import Navbar from '../components/navbar'

// This page shows all assignments available to the user.
// On component mount, it will create an action to fetch the assignments for this particular user.
const assignments = () => {
    return (
        <div>
            <Navbar />
            This is the assignments page.
        </div>
    );
};

export default assignments;
