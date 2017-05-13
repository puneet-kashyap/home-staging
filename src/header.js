import React, { Component } from 'react';
import './App.css';

var skill = "Sonia Bharadwaj";
var skillSet = "Home Staging - Condo Staging - Vacant Home Staging";

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container" id="maincontent" >
                        <div className="row">
                            <div className="col-lg-12">
                                <img className="img-responsive img-circle" src={require('./img/mainImage.png')} alt=""/>
                                    <div className="intro-text">
                                        <h1 className="name">{skill}</h1>
                                        <hr className="star-light"></hr>
                                            <span className="skills">{skillSet}</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;