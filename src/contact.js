import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Let's Chat.</h2>
                            <hr className="star-primary"></hr>
                            <iframe width="100%" height="500" src="https://console.api.ai/api-client/demo/embedded/6b41f18a-0072-4a61-8829-15e899fe64ae"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;