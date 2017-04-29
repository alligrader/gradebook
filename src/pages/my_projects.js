// @flow

import React from 'react';
import InternalNavbar from '../components/internal_navbar';
import Footer from '../components/footer';
import RepoList from '../containers/repo-list';

class MyProjects extends React.Component {
    render(){
        return(
            <div>
                <InternalNavbar />
                <Content />
                <Footer />
            </div>
        );
    }
}

class Content extends React.Component {
    render(){
        return(
            <div className="container index-content-1">
                <RepoList />
            </div>
        );
    }
}

export default MyProjects;
