import { getRepos } from '../actions/index';

const INITIAL_STATE = { all: [], post: null};

//Instantiate state as null for first pass
export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

      case 'REPO_LIST':
        //If the action type is REPO_LIST, return the action.payload (the repo lists)
        return {...state, all:action.payload};
  }
        //If we aren't looking at a REPO_LIST action, then return state and do nothing.
    return state;
}
