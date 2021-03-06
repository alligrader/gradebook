// @flow

import React from 'react';
import InternalNavbar from '../components/internal_navbar';
import Footer from '../components/footer';


const home = () => {
    return <HomePage/>
};

export default home;

class HomePage extends React.Component {
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
            <div>
                <div className="jumbotron">
                    <h1> Welcome To Alligrader! </h1>
                </div>
            </div>
        );
    }
}
