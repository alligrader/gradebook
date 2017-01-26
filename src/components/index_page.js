// @flow

import React from 'react';
import Paths from '../helpers/path_helper';
import Navbar from './navbar'
import Footer from './footer'
import { Link } from 'react-router';


export default () => {
    return <IndexPage/>
};

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
                    <form name="login_form" id="login_form">
                        <h2 className="text-center">User Login</h2>

                        <label>
                            <span>Username:</span>
                            <input type="username" name="username" id="username" required autofocus/>
                        </label>

                        <label>
                            <span>Password:</span>
                            <input type="password" name="password" id="password" required/>
                        </label>

                        <label>
                        <Link to={ Paths.home.path }>
                            <button type="button" className="btn btn-success text-center">Login</button>
                        </Link>
                        </label>

                        <label>
                        <Link to={ Paths.home.index }>Create an Account</Link>
                        </label>

                    </form>
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
