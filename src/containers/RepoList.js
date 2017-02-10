import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getRepos from '../actions/index'

class RepoList extends React.Component {
    componentWillMount(){
        // 1.) Call a new Action Creator, creating a new action, which is passed to the reducers.
        //  ---- 1.a) Hits /api/GHtoken and gets the token from backend.
        //  ---- 1.b) Hits GH API and gets list of repos based on token.
        //  ---- 1.c) Creates action.
        this.props.getRepos();
    }

    renderList(){
        return this.props.repos.map((repo) => {
            return (
                <li key={repo} className="list-group-item">
                    {repo}
                </li>
            );
        });
    }

    render(){
        return(
            <div>
            <ul class="list-group">
                {this.renderList()}
            </ul>
            </div>
        );
    };
}

export default connect(null, { getRepos })(RepoList);
