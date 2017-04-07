// @flow

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Tab, Tabs } from 'react-bootstrap';
import RepoList from '../containers/repo-list';

const home = () => {
    return <HomePage/>
};

export default home;

class HomePage extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Content />
                <Footer />
            </div>
        );
    }
}

class Content extends React.Component {
    render(){
        return(
            <div className="container index-content-1">
                <div className="row">
                    <div className="col-md-11">
                        <ControlledTabs />
                    </div>

                    <div className="col-md-1">
                        <span className="glyphicon glyphicon-cog"></span>
                    </div>
                </div>
            </div>
        );
    }
}

class ControlledTabs extends React.Component {

    state: {
        key: number
    }

   handleSelect: (key: number) => void;

    constructor(props) {
        super(props);
        this.state = { key: 1 };
        this.handleSelect = this._handleSelect.bind(this);
    }

    _handleSelect(key: number) {
        this.setState({ key })
    }

    render() {
        return (
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="Controlled-Tabs">
                <Tab eventKey={1} title="My Bug Profiles"><MyBugProfiles /></Tab>
                <Tab eventKey={2} title="My Projects"><MyProjects /></Tab>
            </Tabs>
        );
    }
}

class MyBugProfiles extends React.Component {
    render(){
        return(
            <div>
                <br/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vitae dignissim leo. Donec rhoncus iaculis erat sit amet molestie. Quisque vitae vestibulum lacus, ut aliquet sapien.
                Praesent id tortor facilisis, fermentum neque id, luctus eros.
                Nulla sapien urna, euismod sit amet faucibus a, ultricies at neque.
                Morbi id justo vel erat pretium aliquet in vel ipsum. In eu mauris at tortor cursus gravida nec sit amet odio.
                </p>
            </div>
        );
    }
}

class MyProjects extends React.Component {
    render(){
        return(
            <div>
            <ul>
                <RepoList />
            </ul>
            </div>
        );
    }
}
