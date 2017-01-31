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
                    <div className="col-md-6">
                        <h1>Get in touch:</h1>
                        <form name="contact_form" id="contact_form" method="post" action="#createLater">
                            <label>
                                <span className="">Name*:</span>
                                <input type="text" placeholder="Please enter your name" name="name" id="name" required/>
                            </label>

                            <label>
                                <span>Email*:</span>
                                <input type="email" placeholder="Please enter your email" name="email" id="email" required/>
                            </label>

                            <label>
                                <span>Message*:</span>
                                <textarea placeholder="Please write me a message!" name="input" id="input"></textarea>
                            </label>

                            <input class="sendButton" type="submit" name="myFormSubmitted" value="Send"/>
                        </form>
                    </div>
                    <div className="col-md-6">
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
