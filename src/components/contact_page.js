// @flow

import React from 'react';
import Navbar from './navbar'
import Footer from './footer'

export default () => {
    return <ContactPage/>
};

class ContactPage extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Content />
                <Footer />
                </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return(
            <div className="container index-content-1">
                <div className="row">
                    This is the content of the contact page
                </div>
            </div>
        );
    }
}
