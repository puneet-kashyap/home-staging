import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { connect } from 'react-redux';

var about1 = "Add Glamour is the GTA's premier home staging company. Our team ensures that your property stands out from competitive listings. We create an emotional connection between prospective buyers and your property";
var about2 = "Our packages are competitive, cost effective and provide excellent ROI. No matter what the size of your project is, we can provide a package that meets your needs. Select the right home stager. Let Sonia Bhardwaj showcase your home for a successful sale.";

const About = (props) => {
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
                    <div className="col-lg-12">
                        <p>{props.aboutUs.aboutUs.p1}</p>
                        <p>{props.aboutUs.aboutUs.p2}</p>
                        <p>{props.aboutUs.aboutUs.p3}</p>
                        <p>{props.aboutUs.aboutUs.p4}</p>
                    </div>
                    <div className="col-lg-12 text-center">
                        <h3>Do You Know</h3>
                        <hr className="star-light"></hr>
                    </div>
                    <div className="col-lg-12">
                        <p>{props.aboutUs.doYouKnow.p1}</p>
                    </div>
                        <div className="col-lg-6 col-lg-offset-3" style={{'margin-top':'50px'}}>
                            <img src={require('./img/business-card.jpeg')} className="img-responsive logo-img" alt="Add Glamour Business Card" />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </div>
    );
} 

const mapStateToProps = (state) => {
   return {
       aboutUs: state.aboutUs
   };
}
export default connect(mapStateToProps)(About);