import React, { Component } from 'react';
import './App.css';


class Footer extends Component {
    render() {
        return (
            <footer className="text-center">
                <div className="footer-above">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col col-md-4">
                                <h3>Location</h3>
                                <p><span>7900 Hurontario St. UNIT 207
                                    <br/>Brampton, ON L6Y0P7</span></p>
                            </div>
                            <div className="footer-col col-md-4">
                                <h3>Around the Web</h3>
                                <ul className="list-inline">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" className="btn-social btn-outline"><span className="sr-only">Facebook</span><i className="fa fa-fw fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://plus.google.com" target="_blank" className="btn-social btn-outline"><span className="sr-only">Google Plus</span><i className="fa fa-fw fa-google-plus"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com" target="_blank" className="btn-social btn-outline"><span className="sr-only">Twitter</span><i className="fa fa-fw fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com" target="_blank" className="btn-social btn-outline"><span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-col col-md-4">
                                <h3>About Myself</h3>
                                <p>Wanna learn more about me. Let's chat. <a href="http://soniabharadwaj.ca">www.soniabharadwaj.ca</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-below">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                Copyright &copy; Sonia Bharadwaj 2017
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;