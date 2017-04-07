// @flow
import React from 'react';

class Navbar extends React.Component{
    state: {
        email: string,
        password: string,
    };

    handleEmailChange: (e: Event) => void;
    handlePasswordChange: (e: Event) => void;
    validate: () => void;

    constructor(props: {}) {
        super(props);
        this.state = { email: "", password: ""};
        this.handleEmailChange = this.emailChange.bind(this);
        this.handlePasswordChange = this.passwordChange.bind(this);
        this.validate = this.val.bind(this);
    }

    emailChange(e: Event) {
        if (e.target instanceof HTMLInputElement) {
            this.setState({ email: e.target.value });
        }
    }

    passwordChange(e: Event) {
        if (e.target instanceof HTMLInputElement) {
            this.setState({ password: e.target.value });
        }
    }

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
                                <a className="page-scroll nav-link" href="#home">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="page-scroll nav-link" href="#about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="page-scroll nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="email"    placeholder="E-Mail..." value={this.state.email} onChange={this.handleEmailChange}/>
                            <input className="form-control mr-sm-2" type="password" placeholder="Password... " value={this.state.password} onChange={this.handlePasswordChange}/>
                            <button className="btn btn-outline-success btn-oldstyle my-2 my-sm-0" type="submit">Log In</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
    // TODO
    // Validation
    val() {
    }

    }



export default Navbar;
