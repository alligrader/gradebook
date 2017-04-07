// @flow

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SignupButton from '../components/signup_modal';
import LoginButton from '../components/login_modal';

class IndexPage extends React.Component{
    componentWillMount(){

    }
    render() {
            return(
                    <div>
                        <Navbar />
                        <Home />
                        <About />
                        <Footer />
                    </div>

            );
        }



}

class Home extends React.Component{
    render() {
        return(
            <div id="home" className="container">
                <div className="jumbotron row">
                    <div className="col-md-8">
                        <h1> Welcome To Alligrader</h1>
                        <p>Alligrader is a product designed to streamline
                        urus sed porttitor. Donec volutpat, elit a imperdiet
                         ultrices, libero diam malesuada lorem, id semper du
                         i nisl id neque. Vestibulum vel tincidunt dui, id fauidunt dui, id f
                         idunt dui, id fttitor. Donec volutpat, elit a imperdiet
                          ultrices, libero diam ma.
                         </p>
                    </div>

                    <div className="col-md-4" id="card-push">
                    <div className="card text-center">
                        <div className="card-block">
                        <h5>Login or create an account today!</h5>
                        <LoginButton  />
                        <SignupButton />
                        </div>
                    </div>

                    </div>
                </div>

                <div className="card-deck">
                    <div className="card text-center">
                        <div className="card-block">
                            <i className="fa fa-wrench fa-5x" aria-hidden="true"></i>
                            <h4 className="card-title">Features</h4>
                            <p className="card-text">Alligrader is proud to offer a diverse list of features to get the most out of your experience. </p>
                            <button className="btn-oldstyle"> Learn More </button>
                        </div>
                    </div>

                    <div className="card text-center">
                        <div className="card-block">
                            <i className="fa fa-comments-o fa-5x" aria-hidden="true"></i>
                            <h4 className="card-title">Testimonials</h4>
                            <p className="card-text">Hear what those who have already incorporated Alligrader into their class have to say!.</p>
                            <button className="btn-oldstyle"> Learn More </button>

                        </div>
                    </div>

                    <div className="card text-center">
                        <div className="card-block">
                            <i className="fa fa-newspaper-o fa-5x" aria-hidden="true"></i>
                            <h4 className="card-title">News & Events</h4>
                            <p className="card-text">Keep up to date with Alligrader developement and give us feedback on the product!</p>
                            <button className="btn-oldstyle"> Learn More </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

class About extends React.Component{
    render() {
        return(
            <div id="about" className="container-fluid">
                <div className="row well">
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

                <div className="row text-center ">
                    <div className="col-sm-4 well-sm">
                    <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                        <h2>Robbie McKinstry</h2>
                        <p>
                        Brief background or something?
                        </p>
                    </div>
                    <div className="col-sm-4 well-sm">
                    <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                        <h2>Daniel Justice</h2>
                        <p>
                        Brief background or something?
                        </p>
                    </div>
                    <div className="col-sm-4 well-sm">
                    <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt="" />
                        <div className="well text-center">
                        <h2>Connor Tshudy</h2>
                        <p>
                        Brief background or something?
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexPage;
