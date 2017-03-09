// @flow

import React from 'react';
import Navbar from './navbar'
import Footer from './footer'

const about = () => {
    return <AboutPage/>
};
export default about;

class AboutPage extends React.Component {
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
    render() {
        return(


    <div className="container about-content-1">
        <div className="row">
            <div className="col-sm-8">
                <h2>What We Do</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec non viverra neque. Pellentesque a turpis volutpat dolor dapibus bibendum.
                    Aliquam sed orci est.
                    Pellentesque eu magna auctor, tristique velit a, scelerisque lorem.
                    Vestibulum vitae mattis velit. Nam eget lacus vel lorem faucibus maximus.
                    Curabitur dui ligula, laoreet sed consectetur eu, ullamcorper a risus.
                    Nulla eleifend quam nec massa luctus, sit amet auctor sem accumsan.
                </p>
            </div>
            <div className="col-sm-4">
                <h3 className="bold">Contact Us:</h3>
                <p><a href="mailto:#">contact@alligrader.com</a></p>
            </div>
        </div>

        <hr/>

        <div className="row text-center">
            <div className="col-sm-4">
            <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                <h2>Robbie McKinstry</h2>
                <p>
                Brief background or something?
                </p>
            </div>
            <div className="col-sm-4">
            <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                <h2>Daniel Justice</h2>
                <p>
                Brief background or something?
                </p>
            </div>
            <div className="col-sm-4">
            <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                <h2>Connor Tshudy</h2>
                <p>
                Brief background or something?
                </p>
            </div>
        </div>
    </div>

        );
    }
}
