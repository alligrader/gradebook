// @flow

import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import LoginForm from './login_form';

let LoginModal = (props: { display: boolean, hide: () => void }) => {

    return (
        <div>
            <Modal show={props.display} onHide={props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm />
                </ Modal.Body>
            </Modal>
        </div>
    );
};

export default class LogInButton extends React.Component {

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
                <Button className="home-buttons btn-oldstyle" onClick={this.open} > Log In </Button>
                <LoginModal display={this.state.display} hide={this.close}/>
            </div>
        );
    }

    state: {
        display: boolean
    }
    open: () => void;
    close: () => void;

}
