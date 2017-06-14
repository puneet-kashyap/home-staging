import React from 'react';
import Gallery from './gallery';


const Modal = (props) => {
    return (
                <div className="portfolio-modal modal fade" id={props.id} tabIndex="-1" role="dialog"
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
                                        <h2>{props.header}</h2>
                                        <hr className="star-primary"/>
                                        <Gallery />
                                        <p>{props.description}</p>
                                        <ul className="list-inline item-details">
                                            <li>Client:
                                                <strong><a href="http://radhasoami.ca/"> {props.client}</a>
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong><a href="http://radhasoami.ca/"> {props.date}</a>
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong><a href="http://radhasoami.ca/"> {props.service}</a>
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
    );
}

Modal.defaultProps = {
    id: "portfolioModal1",
    header: "Home Staging",
    description: "Use this area of the page to describe your project. You can describe your project details and pictures in this section.",
    client: "Toronto",
    date: "April 2017",
    service: "Home Staging"
}

export default Modal;