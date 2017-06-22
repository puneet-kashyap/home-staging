import React from 'react';
import { Link } from 'react-router-dom';


const SubNav = () => {
    return (
        <div>
            <nav id="mainNav" className="subNav navbar navbar-default navbar-custom">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <div className="navbar-header visible-xs">
                            <a href="/">
                                <img src={require('./img/wLogo.png')} className="img-responsive logo-img img-rounded" alt="Add Glamour logo" />
                            </a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li >
                                    <Link to='/'>Home</Link>
                                </li>
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


export default SubNav;