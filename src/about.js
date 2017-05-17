import React from 'react';
import './App.css';

var about1 = "Sonia Bhardwaj is an experienced real estate agent and professional home decorator. Our team ensures that your property stands out from competitive listings.";
var about2 = "No matter what the size of your project is, we can provide a package that meets your needs. Select the right home stager. Let Sonia Bhardwaj showcase your home for a successful sale.";

const About = () => {
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

export default About;