// @flow

import React from 'react';
import { Navbar, Nav, NavItem, Col } from 'react-bootstrap';
import Paths from '../helpers/path_helper';
import { Link } from 'react-router';

export default () => {
    return (
        <div className="col-md-12">
            <Navbar>
                <Nav>
                    <Col md={3}><Link to={ Paths.home.path }>Alligrader</Link></Col>
                    <Col md={3}><Link to={ Paths.profiles.path }>Bug Profiles</Link></Col>
                    <Col md={3}><Link to={ Paths.courses.path }>Courses</Link></Col>
                    <Col md={3}><Link to={ Paths.assignments.path }>Assignments</Link></Col>
                </Nav>
            </Navbar>
        </div>
    );
};
