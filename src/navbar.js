import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <div>
            <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <a href="/">
                            <img src={require('./img/addGlamourLogo.png')} className="img-responsive logo-img img-rounded" alt="Add Glamour logo" />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li >
                                    <Link to='/services'>Services</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/portfolio#'>Portfolio</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/about#'>About</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/contact'>Contact Us</Link>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Navbar.defaultProps = {
    name: "ADD GLAMOUR"
}

export default Navbar;