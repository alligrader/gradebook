// @flow

import {Enum} from 'enumify';

// This guy gives us a nice and pretty enum for debugging purposes. We should probably just this into a helper file so other pages can import it to create links.
export default class Path extends Enum {}
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

    show_profile: {
        get path() { return '/profiles/:id'; },
        slug: 'id',
    },

    courses: {
        get path() { return '/courses'; },
    },

    show_course: {
        get path() { return '/courses/:id'; },
        slug: 'id',
    },

    assignments: {
        get path() { return '/assignments'; },
    },

    show_assignment: {
        get path() { return '/assignments/:id'; },
        slug: 'id',
    },
});
