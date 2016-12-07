// @flow

import React from 'react';
import Paths from '../helpers/path_helper';

type T = {
    params: { 
        slug: string 
    }
};

export default (props: T) => {
    return <div>The profile is { props.params[Paths.show_course.slug] }.</div>
};
