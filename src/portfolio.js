import React, {Component} from 'react';

class Portfolio extends Component {
    render() {
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
                                        <h2>Home Staging</h2>
                                        <hr className="star-primary"/>
                                        <img src={require('./img/cabin.png')} className="img-responsive img-centered"
                                             alt="" />
                                        <p>Use this area of the page to describe your project. You can describe your project details and pictures in this section.</p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong><a href="http://radhasoami.ca/"> Toronto</a>
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong><a href="http://radhasoami.ca/"> April 2017</a>
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong><a href="http://radhasoami.ca/"> Home Staging</a>
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
                                        <h2>Condo Staging</h2>
                                        <hr className="star-primary"/>
                                        <img src={require('./img/cake.png')} className="img-responsive img-centered"
                                             alt="" />
                                        <p>Use this area of the page to describe your project. You can describe your project details and pictures in this section.</p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong><a href="http://radhasoami.ca"> Brampton</a>
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong><a href="http://radhasoami.ca/"> May 2017</a>
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong><a href="http://radhasoami.ca/"> Condo Staging</a>
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
                                        <h2>Commercial property staging</h2>
                                        <hr className="star-primary"/>
                                        <img src={require('./img/circus.png')} className="img-responsive img-centered"
                                             alt="" />
                                        <p>Use this area of the page to describe your project. You can describe your project details and pictures in this section.</p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong><a href="http://radhasoami.ca/"> Malton</a>
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong><a href="http://radhasoami.ca/"> March 2017</a>
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong><a href="http://radhasoami.ca/"> Vacant home staging</a>
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
                <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog"
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
                                        <h2>Vacant home staging</h2>
                                        <hr className="star-primary"/>
                                        <img src={require('./img/game.png')} className="img-responsive img-centered"
                                             alt="" />
                                        <p>Use this area of the page to describe your project. You can describe your project details and pictures in this section.</p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong><a href="http://radhasoami.ca/"> Malton</a>
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong><a href="http://radhasoami.ca/"> December 2016</a>
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong><a href="http://radhasoami.ca/"> Office Staging</a>
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
                <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog"
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
                                        <h2>Condo Staging</h2>
                                        <hr className="star-primary"/>
                                        <img src={require('./img/safe.png')} className="img-responsive img-centered"
                                             alt="" />
                                        <p>Use this area of the page to describe your project. You can describe your project details and pictures in this section.</p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong><a href="http://radhasoami.ca/"> Woodbine</a>
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong><a href="http://radhasoami.ca/"> October 2016</a>
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong><a href="http://radhasoami.ca/"> Home Staging</a>
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

                <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog"
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
                                        <h2>Home Staging</h2>
                                        <hr className="star-primary"/>
                                        <img src={require('./img/submarine.png')} className="img-responsive img-centered"
                                             alt="" />
                                        <p>Use this area of the page to describe your project. You can describe your project details and pictures in this section.</p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong><a href="http://radhasoami.ca/"> Vaughan</a>
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong><a href="http://radhasoami.ca/"> April 2017</a>
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong><a href="http://radhasoami.ca/"> Home Staging</a>
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