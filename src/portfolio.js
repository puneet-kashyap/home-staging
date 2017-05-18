import React from 'react';
import Modal from './modal';

const Portfolio = () => {
        return (
            <div>
            <section id="portfolio">
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
                                <img src={require('./img/cabin.png')} className="img-responsive" alt="Game controller"></img>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={require('./img/cake.png')} className="img-responsive" alt="Cabin"></img>                            
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={require('./img/circus.png')} className="img-responsive" alt="Slice of cake"></img>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={require('./img/game.png')} className="img-responsive" alt="Cabin"></img>                            
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={require('./img/safe.png')} className="img-responsive" alt="Cabin"></img>                            
                            </a>
                        </div>   
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={require('./img/submarine.png')} className="img-responsive" alt="Cabin"></img>                            
                            </a>
                        </div>                           
                    </div>
                </div>
            </section>

                {/*Portfolio Modals*/}
                <Modal
                    id='portfolioModal1'/>
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
            </div>
        );
    }

export default Portfolio;