// @flow

import React from 'react';
import { Navbar, Nav, NavItem, Col } from 'react-bootstrap';
import Paths from '../helpers/path_helper';
import { Link } from 'react-router';

export default () => {
    return (
        <div>
        <nav id="custom-bootstrap-menu" className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to={ Paths.index.path }>ALLIGRADER</Link>

                    </div>
                    <div className="collapse navbar-collapse" id="collapse">
                        <ul className="nav navbar-nav">
                            <li><Link className="my-active" to={ Paths.home.path }>Home</Link></li>
                            <li><Link to={ Paths.home.path }>About Us</Link></li>
                            <li><Link to={ Paths.home.path }>Contact Us</Link></li>

                        </ul>
                    </div>
                  </div>
            </nav>
        </div>
    );
};
