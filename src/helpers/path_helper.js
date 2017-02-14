// @flow

import {Enum} from 'enumify';

// This guy gives us a nice and pretty enum for debugging purposes. We should probably just this into a helper file so other pages can import it to create links.
export default class Path extends Enum {}
Path.initEnum({
    index: {
        get path() { return '/'; },
    },

    sign_up: {
        get path() { return '/sign_up'; },
    },

    home: {
        get path() { return '/home'; },
    },

    about: {
        get path() { return '/about'; },
    },

    contact: {
        get path() { return '/contact'; },
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
