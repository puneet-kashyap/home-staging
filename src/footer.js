import React from 'react';
import { connect } from 'react-redux';

const Footer = (props) => {
    return (
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                            <h3>{props.owner.owner1.name}</h3>
                            <p><span>Ph.# {props.owner.owner1.phone}
                                <a href={`mailto:${props.owner.owner1.email}?Subject=Add%20Glamour`} target="_top"> {props.owner.owner1.email}</a></span>
                                <span className='hidden-xs'>
                                <br/>{props.owner.owner1.address1}
                                <br/>{props.owner.owner1.address2}<br/>
                            </span></p>
                        </div>
                        <div className="footer-col col-md-4 hidden-xs">
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
                            <h3>{props.owner.owner2.name}</h3>
                            <p><span>Ph.# {props.owner.owner2.phone}
                                <a href={`mailto:${props.owner.owner2.email}?Subject=Add%20Glamour`} target="_top"> {props.owner.owner2.email}</a></span>
                                <span className='hidden-xs'>
                                <br/>{props.owner.owner2.address1}
                                <br/>{props.owner.owner2.address2}<br/>
                            </span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            Copyright &copy; Add Glamour Home Staging 2017
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const mapStateToProps = (state) => {
   return {owner: state.users};
}
export default connect(mapStateToProps)(Footer);