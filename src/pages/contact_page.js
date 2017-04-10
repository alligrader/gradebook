// @flow

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const contact = () => {
    return <ContactPage/>
};

export default contact;

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

                    <div className="well col-md-6">
                        <h1>Check us out elsewhere:</h1>
                        <h3>Twitter:</h3>
                        <p>Robbie McKinstry - @twitter_handle</p>
                        <p>Daniel Justice - @twitter_handle</p>
                        <p>Connor Tshudy - @twitter_handle</p>

                        <h3>GitHub:</h3>
                        <p>
                            Link to our open source project?
                        </p>
                        <h3>Other stuff we can decide on much later</h3>
                        <p>
                            That other stuff
                        </p>

                    </div>
                </div>
            </div>
        );
    }
}
