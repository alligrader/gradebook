/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectRepo from '../actions/index';
import { bindActionCreators } from 'redux';
import GetRepos from '../actions/repos';

type Repo = any

type Props = {
    repos: [Repo],
    dispatch: any
}

class RepoList extends Component {

    constructor(props) {
        super(props);
        this.getUser = this._getUser.bind(this);
    }

    props: Props;
    getUser: () => string

    renderList() {
        return this.props.repos.map((repo) => {
            return (
                <li key={repo.key} className="list-group-item">
                    {repo.full_name}
                </li>
            );
        });
    }


    render() {
        return (
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        )
    }

    // TODO get this value from the state
    _getUser() {
        return "RobbieMcKinstry"
    }

    componentWillMount() {
        // Get the current user
        // Call the action creater
        // Dispatch the action
        const user = this.getUser();
        const action = GetRepos(user);
        this.props.dispatch(action);
    }
}

RepoList.propTypes = {
    repos: React.PropTypes.array
};


function mapStateToProps(state) {
    // whatever is returned will show up as props will show up as props inside of RepoList
    return {
        repos: state.repos
    };
}

//anything returned form this function will end up
//as props on the repoList container
function mapDispatchtoProps(dispatch){
    //whenever selectRepo is called, the result should be passed to all of our reducers
    return bindActionCreators({selectRepo, dispatch}, dispatch)
}

// Promote repoList from a component to a container - it needs to know about this new dispatch
//method, selectRepo. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchtoProps)(RepoList);
