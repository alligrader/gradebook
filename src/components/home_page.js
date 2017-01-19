// @flow

import React from 'react';
import Paths from '../helpers/path_helper';
import Navbar from './navbar'
import Footer from './footer'
import { Link } from 'react-router';
import { Tab, Tabs } from 'react-bootstrap';


export default () => {
    return <HomePage/>
};


var HomePage = React.createClass({

    render: function (){
        return(
            <div>
                <Navbar />
                <Content />
                <Footer />
            </div>
        );
    }

});

var Content = React.createClass({

    render: function (){
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

});


const ControlledTabs = React.createClass({
  getInitialState() {
    return {
      key: 1
    };
  },

  handleSelect(key) {
    {/*alert('selected ' + key);*/}
    this.setState({key});
  },

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="My Bug Profiles"><MyBugProfiles /></Tab>
        <Tab eventKey={2} title="My Projects"><MyProjects /></Tab>
      </Tabs>
    );
  }
});

var MyBugProfiles = React.createClass({
  render: function(){
    return(
      <div>
      <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur vitae dignissim leo. Donec rhoncus iaculis erat sit amet molestie. Quisque vitae vestibulum lacus, ut aliquet sapien.
        Praesent id tortor facilisis, fermentum neque id, luctus eros.
        Nulla sapien urna, euismod sit amet faucibus a, ultricies at neque.
        Morbi id justo vel erat pretium aliquet in vel ipsum. In eu mauris at tortor cursus gravida nec sit amet odio.

      </div>
  );
  }
});

var MyProjects = React.createClass({
  render: function(){
    return(
      <div>
        <br/>
        Morbi eu ipsum eu tellus porta pellentesque. Quisque ligula magna, elementum id pellentesque posuere, imperdiet nec est.
        Proin ac lacinia nunc. Morbi consectetur, erat sed efficitur ullamcorper, purus massa ultricies tellus, vel eleifend arcu lacus ac massa.
        Ut a elit enim. Fusce lacus nibh, interdum eu tincidunt ut, facilisis quis orci.
        Ut finibus semper pulvinar. Pellentesque placerat elementum lorem, bibendum viverra nulla lacinia sed.
        Fusce feugiat facilisis feugiat. Aenean at vestibulum diam, quis pulvinar sem.
        Donec at libero ut orci convallis tristique.
      </div>
    );
  }
});
