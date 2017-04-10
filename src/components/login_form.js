// @flow

import React from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class LoginForm extends React.Component {

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

    renderFormControls() {
        return (
            <div>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.email}
                    placeholder="Email Address..."
                    onChange={this.handleEmailChange}

                />
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    type="password"
                    value={this.state.password}
                    placeholder="Password..."
                    onChange={this.handlePasswordChange}
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
