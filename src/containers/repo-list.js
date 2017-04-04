import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRepo } from '../actions/index';
import { bindActionCreators } from 'redux';

class RepoList extends Component {
    renderList() {
        return this.props.repos.map((repo) => {
            return (
                <li key={repo.title} className="list-group-item">
                    {repo.title}
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
}

RepoList.propTypes = {
    repos: React.PropTypes.array
};


function mapStateToProps(state){
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
