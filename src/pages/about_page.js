// @flow

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
        
    </div>

        );
    }
}
