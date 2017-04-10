// @flow

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Paths from '../helpers/path_helper';
import { Link } from 'react-router';

class IndexPage extends React.Component{
    componentWillMount(){}
    componentDidMount() {}

    render() {
            return(
                    <div>
                        <Navbar />
                        <Home />
                        <About />
                        <Contact />
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
                        <h5>Create an account today!</h5>
                        <Link className="btn btn-oldstyle" id="hoverable" to={ Paths.create_account.path }> Sign Up</Link>
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
        <div>
            <div id="about" className="container-fluid">
                <div className="row card">
                    <div className="col-lg-8 offset-lg-2 ">
                        <h2 className="text-center">What We Do</h2>
                        <br/><br/>
                        <p  className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec non viverra neque. Pellentesque a turpis volutpat dolor dapibus bibendum.
                            Aliquam sed orci est.
                            Pellentesque eu magna auctor, tristique velit a, scelerisque lorem.
                            Vestibulum vitae mattis velit. Nam eget lacus vel lorem faucibus maximus.
                            Curabitur dui ligula, laoreet sed consectetur eu, ullamcorper a risus.
                            Nulla eleifend quam nec massa luctus, sit amet auctor sem accumsan.
                            Vestibulum vitae mattis velit. Nam eget lacus vel lorem faucibus maximus.
                            Curabitur dui ligula, laoreet sed consectetur eu, ullamcorper a risus.
                            Nulla eleifend quam nec massa luctus, sit amet auctor sem accumsan.
                            Vestibulum vitae mattis velit. Nam eget lacus vel lorem faucibus maximus.
                            Curabitur dui ligula, laoreet sed consectetur eu, ullamcorper a risus.
                            Nulla eleifend quam nec massa luctus, sit amet auctor sem accumsan.
                        </p>
                    </div>
            </div>
        </div>
            <div className="container">

                <div className="row" id="about_row">
                    <div className="col-lg-4 offset-lg-4">
                        <img className="" src="http://placehold.it/300x300" alt="" />
                        <h2>Robbie McKinstry</h2>
                        <p>
                        Brief background or something?
                        </p>
                    </div>
                </div>

                <div className="row" id="about_row">
                    <div className="col-lg-4 offset-lg-1">
                        <img className="" src="http://placehold.it/300x300" alt="" />
                        <h2>Connor Tshudy</h2>
                        <p>
                        Brief background or something?
                        </p>
                    </div>

                    <div className="col-lg-4 offset-lg-2">
                        <img className="" src="http://placehold.it/300x300" alt="" />
                        <h2>Daniel Justice</h2>
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

class Contact extends React.Component{
    render() {
        return(
            <div id="contact" className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <hr/>
                        <h1>Contact Us:</h1>
                        <hr/>
                    </div>

                    <div className="col-lg-6 offset-lg-3 card">
                        <h1>Check us out elsewhere:</h1>
                        <h3>Twitter:</h3>
                        <p>Robbie McKinstry - @twitter_handle</p>
                        <p>Daniel Justice - @twitter_handle</p>
                        <p>Connor Tshudy - @twitter_handle</p>

                        <h3>GitHub:</h3>
                        <p>
                            Link to our open source project?
                        </p>
                        <h3>Other stuff we can decide on much later</h3>
                        <p>
                            That other stuff
                        </p>

                    </div>
                </div>
            </div>
    )}
}


export default IndexPage;
