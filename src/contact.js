import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Map from './map';

const Contact = () => {
    return (
    <div id="top">
    <Navbar/>
    <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>Contact Us.</h1>
                    <hr className="star-primary"></hr>
                        <div className="col-lg-6">
                            <h3>Sonia Bhardwaj</h3>
                            <p><span>
                                <br/>7900 Hurontario St. UNIT 207
                                <br/>Brampton, ON L6Y0P7
                                <br/>Ph.# 416-951-0581
                                <br/>Email:
                                <a href="mailto:sonia@addglamour.ca?Subject=Add%20Glamour" target="_top"> sonia@addglamour.ca</a>
                                <br/>
                                </span>
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <h3>Simar Dhaliwal</h3>
                            <p><span>
                                <br/>7900 Hurontario St. UNIT 207
                                <br/>Brampton, ON L6Y0P7
                                <br/>Ph.# 647-292-0009
                                <br/>Email:
                                <a href="mailto:sonia@addglamour.ca?Subject=Hello%20again" target="_top"> simar@addglamour.ca</a>
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

export default Contact;