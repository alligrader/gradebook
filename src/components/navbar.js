// @flow

import React from 'react';
//import Paths from '../helpers/path_helper';
//import { Link } from 'react-router';

const navbar = () => {
    return (
        <div className="container-fluid">
        <nav className="navbar navbar-toggleable-lg navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Navbar</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="page-scroll nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
          <a className="page-scroll nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
          <a className="page-scroll nav-link" href="#features">Features</a>
          </li>
          <li className="nav-item">
          <a className="page-scroll nav-link" href="#contact">Contact</a>
          </li>

        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="email" placeholder="E-Mail"/>
          <input className="form-control mr-sm-2" type="password" placeholder="Password"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Log In</button>
        </form>
        </div>
        </nav>
        </div>
    );
};

export default navbar;
