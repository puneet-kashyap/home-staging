import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

var about1 = "Add Glamour is the GTA's premier home staging company. Our team ensures that your property stands out from competitive listings. We create an emotional connection between prospective buyers and your property";
var about2 = "Our packages are competitive, cost effective and provide excellent ROI. No matter what the size of your project is, we can provide a package that meets your needs. Select the right home stager. Let Sonia Bhardwaj showcase your home for a successful sale.";

const About = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>About Us</h2>
                        <hr className="star-light"></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <p>{about1}</p>
                    </div>
                    <div className="col-lg-6 col-lg-offset-6">
                        <p>{about2}</p>
                    </div>
                    <div className="col-lg-8 col-lg-offset-2 text-center">
                        <a href="#" className="btn btn-lg btn-outline">
                            Call Sonia Bhardwaj <br/>Ph.# 416-951-0581
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </div>
    );
} 

export default About;