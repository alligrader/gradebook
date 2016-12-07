// @flow

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Paths from '../helpers/path_helper';

export default () => {
    return (
        <div className="col-md-12">
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href={ Paths.home.path }>Alligrader</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href={ Paths.profiles.path }>Bug Profiles</NavItem>
                    <NavItem eventKey={2} href={ Paths.courses.path}>Courses</NavItem>
                    <NavItem eventKey={3} href={ Paths.assignments.path}>Assignments</NavItem>
                </Nav>
            </Navbar>
        </div>
    )
};
