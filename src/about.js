import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { connect } from 'react-redux';

const About = (props) => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>About Us</h2>
                        <hr className="star-primary"></hr>
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
                        <div className="col-lg-6 col-lg-offset-3" style={{'marginTop':'50px'}}>
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