// @flow

import React from 'react';
import Paths from '../helpers/path_helper';
import Navbar from './navbar'
import Footer from './footer'
import { Link } from 'react-router';


export default () => {
    return <IndexPage/>
};


var IndexPage = React.createClass({

    render: function (){
        return(
            <div>
                <Navbar />
                  <Content />
                <Footer />
            </div>
        );
    }

});

var Content = React.createClass({

    render: function (){
        return(
            <div className="container index-content-1">
              <div className="row">
                <Info />
                <SignInBox />
              </div>
            </div>
        );
    }

});

var SignInBox = React.createClass({

    render: function (){
        return(

                  <div className="col-md-4">
                      <div className="SignInBox well">
                        <form name="LoginForm">
                            <h2 className="text-center">User Login</h2>
                            <label>
                                <span>Username:</span>
                                <input type="username" name="name" id="name" required autofocus/>
                            </label>

                            <label>
                                <span>Phone:</span>
                                <input type="password" name="phone" id="phone" required/>
                            </label>

                            <button><Link  to={ Paths.home.path }>Login</Link></button>
                            <Link to={ Paths.home.index }><a href="#">Sign Up Today!</a></Link>
                        </form>
                      </div>
                    </div>
        );
    }

});

var Info = React.createClass({

    render: function (){
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

});
