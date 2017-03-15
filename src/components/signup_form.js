// @flow

import React from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class LoginForm extends React.Component {

    state: {
        email: string,
        password: string,
        password_copy: string,
    };

    handleEmailChange: (e: Event) => void;
    handlePasswordChange: (e: Event) => void;
    handlePasswordCopyChange: (e: Event) => void;
    validate: () => void;

    constructor(props: {}) {
        super(props);
        this.state = { email: "", password: "", password_copy: ""};
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
                <ControlLabel>Email</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.email}
                    placeholder="robbie@alligrader.io"
                    onChange={this.handleEmailChange}
                />
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    type="password"
                    value={this.state.password}
                    placeholder="foobar"
                    onChange={this.handlePasswordChange}
                />
                <ControlLabel>Password Again</ControlLabel>
                <FormControl
                    type="password"
                    value={this.state.password}
                    placeholder="foobar"
                    onChange={this.handlePasswordCopyChange}
                />
                <FormControl.Feedback />
            </div>
        );
    }

    // TODO
    // Validation
    val() {
    }

}

export default LoginForm;
