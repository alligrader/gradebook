// @flow

import React from 'react';
import Paths from '../helpers/path_helper';


type T = {
    params: { 
        slug: string 
    },
};

const showAssignment = (props: T) => {
    return <div>The assignment is { props.params[Paths.show_course.slug] }.</div>
};

export default showAssignment;
