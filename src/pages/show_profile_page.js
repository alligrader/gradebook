// @flow

import React from 'react';
import Paths from '../helpers/path_helper';

type T = {
    params: { 
        slug: string 
    }
};

const showProfile = (props: T) => {
    return <div>The profile is { props.params[Paths.show_course.slug] }.</div>
};

export default showProfile;
