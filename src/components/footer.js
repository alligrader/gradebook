// @flow

import React from 'react';
import Paths from '../helpers/path_helper';
import { Link } from 'react-router';

export default () => {
    return (
      <div>
        <footer className="container">
          <div className="row" >

            <div className="col-md-5 col-md-offset-1 vert">
              <ul>
                <li><Link className="footerText" to={ Paths.home.path }>Home</Link></li>                <br/>
                <br/>
                <li><Link className="footerText" to={ Paths.about.path }>About Us</Link></li>
                <br/>
                <li><Link className="footerText" to={ Paths.contact.path }>Contact Us</Link></li>
              </ul>
            </div>

          <div className="col-md-5">
            <p className="footHeader">Header Information</p>
            <p> Some other kind of information </p>
            <br/>
            <p> Some other kind of information </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <hr/>
            <p>&copy 2017, Alligrader. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    );
};
