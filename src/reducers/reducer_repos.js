/* flow */

import Immutable from 'immutable';

export default function(_state = [], action){

    switch(action.type) {
    case 'REPOS_REQ': {
        const repos = Immutable.List(action.payload.data);
        const result = repos.map(repo => {
            const unaltered = Immutable.Map(repo);
            const altered   = unaltered.set('key', repo.id);
            return altered.toJS();
        });
        return result.toJS();
    }
    default: {
        const result = Immutable.List([
            { title: 'Repo 1', key: 1 },
            { title: 'Repo 2', key: 2 },
            { title: 'Repo 3', key: 3 },
            { title: 'Repo 4', key: 4 }
        ]);
        return result.toJS();
    }}
}
