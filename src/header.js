import React from 'react';

var skill = "Sonia Bhardwaj";
var skillSet = "Real Estate Professional - Home Staging expert - Reliable Consultant";

const Header = () => {
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

export default Header;