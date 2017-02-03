import React, { Component } from 'react';
import { connect } from 'react-redux';


class RepoList extends Component {
    renderList(){
        return this.props.repos.map((book) => {
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


function mapStateToProps(state){
    // whatever is retruend will show up as props will show up as props inside of RepoList
    return{
        repos: state.repos
    };
}

function componentWillMount(){
    //super();
    //call a new Action Creator which in turn creates a new action
}

export default connect(mapStateToProps)(RepoList);
