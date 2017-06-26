import React from 'react';
import Modal from './modal';
import Navbar from './navbar';
import Footer from './footer';
import { prudhommeImages } from './files/images';

const Portfolio = () => {
        return (
            <div>
            <Navbar />
            <section  className="success" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Portfolio</h2>
                            <hr className="star-primary"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={require('./img/Prudhomme/IMG_0013.jpg')} className="img-responsive" alt="Prudhomme Home"></img>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={require('./img/Prudhomme/IMG_0009.jpg')} className="img-responsive" alt="Prudhomme Home"></img>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={require('./img/Prudhomme/IMG_0012.jpg')} className="img-responsive" alt="Prudhomme Home"></img>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={require('./img/Prudhomme/IMG_0024.jpg')} className="img-responsive" alt="Prudhomme Home"></img>                       
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={require('./img/Prudhomme/IMG_0029.jpg')} className="img-responsive" alt="Prudhomme Home"></img>                       
                            </a>
                        </div>   
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={require('./img/Prudhomme/IMG_0033.jpg')} className="img-responsive" alt="Prudhomme Home"></img>
                            </a>
                        </div>
                    </div>

                    <iframe className="hidden-xs center-block embed-responsive-item " width="853" height="480" src="https://www.youtube.com/embed/z82anwWv6EY" frameBorder="0" allowFullScreen></iframe>
                    <div className="embed-responsive embed-responsive-16by9 visible-xs">
                        <iframe className="visible-xs center-block embed-responsive-item" src="https://www.youtube.com/embed/z82anwWv6EY"></iframe>
                    </div>

                </div>
            </section>

                {/*Portfolio Modals*/}
                <Modal
                    album= {prudhommeImages}
                    id='portfolioModal1'
                    client='Brampton'
                    description='Home staging done at Prudhomme drive, Brampton.'
                />

                <Modal
                    id='portfolioModal2'
                    header='Condo Staging'
                    city='Brampton'
                    date='May 2017'
                    service='Condo Staging'/>
                <Modal
                    id='portfolioModal3'
                    header='Commercial property staging'
                    city='Malton'
                    date='March 2017'
                    service='Commercial property staging'/>
                <Modal
                    id='portfolioModal4'
                    header='Vacant home staging'
                    city='Malton'
                    date='December 2016'
                    service='Vacant home staging'/>
                <Modal
                    id='portfolioModal5'
                    header='Condo Staging'
                    city='Woodbine'
                    date='October 2016'
                    service='Condo Staging'/>
                <Modal
                    id='portfolioModal6'
                    header='Home Staging'
                    city='Vaughan'
                    date='April 2016'
                    service='Home Staging'/>
            <Footer />
            </div>
        );
    }

export default Portfolio;
