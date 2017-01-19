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
                                <li><a className="footerText" href="../websitedev">Home</a></li>
                                <br/>
                                <li><a className="footerText" href="../websitedev">About Us</a></li>
                                <br/>
                                <li><a className="footerText" href="../websitedev">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="col-md-5">
                           <p className="footHeader">
                               Header Information
                           </p>

                           <p> Some other kind of information </p>
                           <br/>
                           <p> Some other kind of information </p>

                        </div>

                    </div>

           <div className="row">
               <div className="col-lg-12">

                  <hr />
                  <p>&copy 2017, Alligrader. All Rights Reserved.</p>
               </div>
           </div>
       </footer>
          </div>
    );
};
