import React, {Component} from 'react';
import './App.css';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>Portfolio</h2>
                                <hr className="star-primary" />
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
                                    <img src={require('./img/fullStack.png')} className="img-responsive"
                                         alt="Game controller" />
                                </a>
                            </div>
                            <div className="col-sm-4 portfolio-item">
                                <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={require('./img/automatedTesting.png')} className="img-responsive"
                                         alt="Cabin" /> </a>
                            </div>
                            <div className="col-sm-4 portfolio-item">
                                <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={require('./img/sparkScala.png')} className="img-responsive"
                                         alt="Slice of cake" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Portfolio Modals*/}

                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog"
                     aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>Project Title</h2>
                                        <hr className="star-primary"/>
                                        <img src="img/portfolio/cabin.png" className="img-responsive img-centered"
                                             alt="" />
                                        <p>Use this area of the page to describe your project. The icon above is part of
                                            a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>.
                                            On their website, you can download their free set with 16 icons, or you can
                                            purchase the entire set with 146 icons for only $12!</p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong><a href="http://startbootstrap.com">April 2014</a>
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong><a href="http://startbootstrap.com">Web Development</a>
                                                </strong>
                                            </li>
                                        </ul>
                                        <button type="button" className="btn btn-default" data-dismiss="modal"><i
                                            className="fa fa-times"></i> Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog"
                     aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>Project Title</h2>
                                        <hr className="star-primary"/>
                                        <img src="img/portfolio/cabin.png" className="img-responsive img-centered"
                                             alt="" />
                                        <p>Use this area of the page to describe your project. The icon above is part of
                                            a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>.
                                            On their website, you can download their free set with 16 icons, or you can
                                            purchase the entire set with 146 icons for only $12!</p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong><a href="http://startbootstrap.com">April 2014</a>
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong><a href="http://startbootstrap.com">Web Development</a>
                                                </strong>
                                            </li>
                                        </ul>
                                        <button type="button" className="btn btn-default" data-dismiss="modal"><i
                                            className="fa fa-times"></i> Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog"
                     aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>Project Title</h2>
                                        <hr className="star-primary"/>
                                        <img src="img/portfolio/cabin.png" className="img-responsive img-centered"
                                             alt="" />
                                        <p>Use this area of the page to describe your project. The icon above is part of
                                            a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>.
                                            On their website, you can download their free set with 16 icons, or you can
                                            purchase the entire set with 146 icons for only $12!</p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong><a href="http://startbootstrap.com">April 2014</a>
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong><a href="http://startbootstrap.com">Web Development</a>
                                                </strong>
                                            </li>
                                        </ul>
                                        <button type="button" className="btn btn-default" data-dismiss="modal"><i
                                            className="fa fa-times"></i> Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Portfolio;