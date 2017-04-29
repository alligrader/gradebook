/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GetStyleProps from '../actions/style_props';

type Style_Properties = any

type Props = {
    style_props: [Style_Properties],
    dispatch: any
}

class BugProfile extends Component {

    constructor(props) {
        super(props);
    }

    props: Props;

    renderList() {
        return this.props.style_props.map((style_pros) => {
            return (
                <li key={style_pros.key} className="list-group-item">
                    {style_pros.full_name}
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

    componentWillMount() {
        // Call the action creater
        // Dispatch the action
        const action = GetStyleProps();
        this.props.dispatch(action);
    }
}

BugProfile.propTypes = {
    style_props: React.PropTypes.array
};


function mapStateToProps(state) {
    // whatever is returned will show up as props will show up as props inside of RepoList
    return {
        style_props: state.style_props
    };
}

//anything returned form this function will end up
//as props on the repoList container
function mapDispatchtoProps(dispatch){
    //whenever selectRepo is called, the result should be passed to all of our reducers
    return bindActionCreators({GetStyleProps, dispatch}, dispatch)
}

// Promote repoList from a component to a container - it needs to know about this new dispatch
//method, selectRepo. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchtoProps)(BugProfile);
