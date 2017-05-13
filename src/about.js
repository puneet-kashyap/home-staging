import React, { Component } from 'react';
import './App.css';

var about1 = "Sonia Bharadwaj is an experienced real estate agent and professional home decorator. Our team ensures that your property stands out from competitive listings.";
var about2 = "No matter the size of your project, we can provide a package that meets your needs. Select the right home stager. Let Sonia Bharadwaj showcase your home for a successful sale.";

class About extends Component {
    render() {
        return (
            <section className="success" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>About</h2>
                            <hr className="star-light"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-lg-offset-2">
                            <p>{about1}</p>
                        </div>
                        <div className="col-lg-4">
                            <p>{about2}</p>
                        </div>
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <a href="#" className="btn btn-lg btn-outline">
                                <i className="fa fa-download"></i> Download Profile
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;