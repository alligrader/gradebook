// @flow

import React from 'react';
import { OAuthSignInButton } from "redux-auth/bootstrap-theme";
import { Button, Modal } from 'react-bootstrap';

let SignupModal = (props: { display: boolean, hide: () => void }) => {

    return (

        // First, I need to import redux-auth
        // Then, I need to render the sign up button.
        // After, we need to redirect to the backend at a particular route.
        // This route needs to issue a JWT and redirect to a static page.
        // This static page needs to have the same URL as the current page.

        <div> 
            <Modal show={props.display} onHide={props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OAuthSignInButton provider="github"/>
                </ Modal.Body>
            </Modal>
        </div>
    );
};

export class SignupButton extends React.Component {

    constructor(props: {}) {
        super(props);
        this.state = { display: false};
        this.open = this._open.bind(this);
        this.close = this._close.bind(this);
    }

    _close() {
        this.setState({ display: false});
    }

    _open() {
        this.setState({ display: true});
    }

    render() {
        return (
            <div>
                <Button bsStyle="primary" bsSize="large" onClick={this.open} > Sign Up </Button>
                <SignupModal display={this.state.display} hide={this.close}/>
            </div>
        );
    }

    state: {
        display: boolean
    }
    open: () => void;
    close: () => void;

}
export default SignupModal;
