import React from 'react';
import { Link } from 'react-router-dom';
import SubNav  from './subnav';


const Navbar = (props) => {
    return (
        <div>
            <nav className="hidden-xs navbar navbar-default navbar-custom">
                <div className="container">
                    <div className="navbar-header">
                        <a href="/">
                            <img src={require('./img/logo.png')} className="img-responsive logo-img img-rounded" alt="Add Glamour logo" />
                        </a>
                    </div>
                    <div className="navbar-header navbar-right">
                        <a href="/">
                            <img src={require('./img/bCard.jpeg')} className="img-responsive logo-img img-rounded" alt="Add Glamour logo" />
                        </a>
                    </div>
                </div>
            </nav>
           <SubNav />
        </div>
    );
}

Navbar.defaultProps = {
    name: "ADD GLAMOUR"
}

export default Navbar;