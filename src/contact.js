import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Map from './map';
import { connect } from 'react-redux';

const Contact = (props) => {
    return (
    <div>
    <Navbar/>
    <section id="contact" className="success">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>Contact Us.</h1>
                    <hr className="star-primary"></hr>
                        <div className="col-lg-6">
                            <h3>{props.owner.owner2.name}</h3>
                            <img src={require('./img/DP/Simar.jpg')} className="img-responsive center-block" alt="Simar Dhaliwal"/>
                            <p><span>
                                <br/>{props.owner.owner2.address1}
                                <br/>{props.owner.owner2.address2}
                                <br/>Ph.# {props.owner.owner2.phone}
                                <br/>Email:
                                <a href={`mailto:{props.owner.owner2.email}?Subject=Add%20Glamour`} target="_top"> {props.owner.owner2.email}</a>
                                <br/>
                                </span>
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <h3>{props.owner.owner1.name}</h3>
                            <img src={require('./img/DP/Sonia.jpeg')} className="img-responsive center-block" alt="Sonia Bhardwaj"/>
                            <p><span>
                                <br/>{props.owner.owner1.address1}
                                <br/>{props.owner.owner1.address2}
                                <br/>Ph.# {props.owner.owner1.phone}
                                <br/>Email:
                                <a href={`mailto:{props.owner.owner1.email}?Subject=Add%20Glamour`} target="_top"> {props.owner.owner1.email}</a>
                                <br/>
                                </span>
                            </p>
                        </div>
                </div>
            </div>
                <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Let's Chat.</h2>
                    <hr className="star-primary"></hr>
                    <iframe width="100%" height="500" src="https://console.api.ai/api-client/demo/embedded/3b9af493-8128-477e-b731-676baddb3ffb"></iframe>
                </div>
            </div>
        </div>
    </section>
    <Map/>
    <Footer />
    </div>
);

}

const mapStateToProps = (state) => {
   return {owner: state.users};
}

export default connect(mapStateToProps)(Contact);