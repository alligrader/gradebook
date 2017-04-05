/* @flow */

import axios from 'axios';

function GetRepos(user: string) {

    // TODO please dear God use a Enum / const instead of hardcoding a 'type'
    // TODO sweet christ use a constant and a function to generate this URL instead
    // of doing it inline
    return {
        type: 'REPOS_REQ',
        payload: axios.get('https://api.github.com/users/' + user + '/repos')
    }
}

export default GetRepos;
