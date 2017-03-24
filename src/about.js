import React, { Component } from 'react';
import './App.css';

var about1 = "Enthusiastic IT professional with experience of working in variety of fields from Quality assurance to full stack development to Big Data in Travel, Hospitality, and Loyalty domain.";
var about2 = "Highly analytical thinking with demonstrated talent for identifying, scrutinizing, improving, and streamlining complex work with continuous process improvements!";

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