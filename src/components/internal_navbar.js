// @flow
import React from 'react';
import Paths from '../helpers/path_helper';
import { Link } from 'react-router';


class InternalNavbar extends React.Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-toggleable-lg navbar-fixed-top navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand" href="../">Alligrader</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" id="hoverable" to={ Paths.index.path }> Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" id="hoverable" to={ Paths.my_projects.path }> My Projects</Link>

                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" id="hoverable" to={ Paths.bug_profiles.path }> Bug Profiles</Link>

                            </li>
                        </ul>


                    </div>
                </nav>
            </div>
        )
    }
}




export default InternalNavbar;
