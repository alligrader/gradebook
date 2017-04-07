// @flow

import React from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import Paths from '../helpers/path_helper';
import { Link } from 'react-router';


class LoginForm extends React.Component {

    state: {
        first_name: string,
        last_name: string,

        email: string,
        password: string,
        password_copy: string,
    };
    handleFirstNameChange: (e: Event) => void;
    handleLastNameChange: (e: Event) => void;
    handleEmailChange: (e: Event) => void;
    handlePasswordChange: (e: Event) => void;
    handlePasswordCopyChange: (e: Event) => void;
    validate: () => void;

    constructor(props: {}) {
        super(props);
        this.state = { first_name: "", last_name: "", email: "", password: "", password_copy: ""};
        this.handleFirstNameChange = this.firstNameChange.bind(this);
        this.handleLastNameChange = this.lastNameChange.bind(this);
        this.handleEmailChange = this.emailChange.bind(this);
        this.handlePasswordChange = this.passwordChange.bind(this);
        this.handlePasswordCopyChange = this.passwordCopyChange.bind(this);
        this.validate = this.val.bind(this);
    }

    renderFormGroup() {
        return (
            <FormGroup
                controlId="formBasicText"
                validationState={this.validate}
            >
                { this.renderFormControls() }

            </FormGroup>
           );
    }

    render() {
        return (
            <div>
                <form>
                    { this.renderFormGroup() }
                </form>
            </div>
        );

    }

    firstNameChange(e: Event) {
        if (e.target instanceof HTMLInputElement) {
            this.setState({ first_name: e.target.value });
        }
    }

    lastNameChange(e: Event) {
        if (e.target instanceof HTMLInputElement) {
            this.setState({ last_name: e.target.value });
        }
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

    passwordCopyChange(e: Event) {
        if (e.target instanceof HTMLInputElement) {
            this.setState({ password_copy: e.target.value });
        }
    }

    renderFormControls() {
        return (
            <div>
                <ControlLabel>First Name</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.first_name}
                    placeholder="First name..."
                    onChange={this.handleFirstNameChange}
                />

                <ControlLabel>Last Name</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.last_name}
                    placeholder="Last name..."
                    onChange={this.handleLastNameChange}
                />

                <ControlLabel>E-Mail</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.email}
                    placeholder="E-Mail address..."
                    onChange={this.handleEmailChange}
                />
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    type="password"
                    value={this.state.password}
                    placeholder="Password..."
                    onChange={this.handlePasswordChange}
                />
                <ControlLabel>Password Again</ControlLabel>
                <FormControl
                    type="password"
                    value={this.state.password}
                    placeholder="Repeat Password..."
                    onChange={this.handlePasswordCopyChange}
                />
                <FormControl.Feedback />
                <Link className="btn btn-success btn-md" id="hoverable" to={ Paths.home.path }> Sign Up</Link>

            </div>
        );
    }

    // TODO
    // Validation
    val() {
    }

}

export default LoginForm;
