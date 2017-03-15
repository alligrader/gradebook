// @flow

import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import LoginForm from './login_form';

let SignInModal = (props: { display: boolean, hide: () => void }) => {

    return (
        <div> 
            <Modal show={props.display} onHide={props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm />
                </ Modal.Body>
            </Modal>
        </div>
    );
};

export default class SignInButton extends React.Component {

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
                <Button bsStyle="primary" bsSize="large" onClick={this.open} > Log In </Button>
                <SignInModal display={this.state.display} hide={this.close}/>
            </div>
        );
    }

    state: {
        display: boolean
    }
    open: () => void;
    close: () => void;

}
