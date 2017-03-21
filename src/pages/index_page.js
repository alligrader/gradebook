// @flow

import React from 'react';
import Paths from '../helpers/path_helper';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router';

import SignupButton from '../components/signup_modal';
import LoginButton from '../components/signin_modal';

const index = () => {
    return <IndexPage/>
};

export default index;

class IndexPage extends React.Component {
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
                    <Info />
                    <SignInBox />
                </div>
            </div>
        );
    }
}

class SignInBox extends React.Component {
    render(){
        return(
            <div className="col-md-4">
                <div className="SignInBox well">
                    <SignupButton />
                    <LoginButton  />
                </div>
            </div>
        );
    }
}

class Info extends React.Component {
    render(){
        return(
            <div className="col-md-4">
                <h2>Alligrader is a... </h2>
                <p>
                    Praesent lacus erat, malesuada a aliquet in, gravida ac erat.
                    Morbi placerat metus sed scelerisque congue.
                    Sed ac eros rutrum, mattis tellus ac, suscipit purus.
                    Fusce in arcu ac sem rutrum mattis.
                    Donec sollicitudin sem et diam vulputate ornare.
                    Donec maximus in justo vel pulvinar. In hac habitasse platea dictumst.
                </p>
            </div>
        );
    }
}
