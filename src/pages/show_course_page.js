// @flow

import React from 'react';
import Paths from '../helpers/path_helper';

type T = { 
    params: { 
        slug: string 
    }
};

const showCourse = (props: T ) => {
    return <div>The course is { props.params[Paths.show_course.slug] }.</div>
};
export default showCourse;
