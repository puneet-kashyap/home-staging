import React from 'react';
import Gallery from './gallery';
import { prudhommeImages } from './files/images';

const Modal = (props) => {
    return (
                <div className="portfolio-modal modal fade" id={props.id} tabIndex="-1" role="dialog"
                     aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal hidden-xs" data-dismiss="modal">
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
                                        <Gallery album={props.album}/>
                                        <p>{props.description}</p>
                                        <ul className="list-inline item-details">
                                            <li>City:
                                                <strong><a href="https://addglamour.ca/"> {props.client}</a>
                                                </strong>
                                            </li>
                                            <li>Date:
                                                <strong><a href="https://addglamour.ca/"> {props.date}</a>
                                                </strong>
                                            </li>
                                            <li>Service:
                                                <strong><a href="https://addglamour.ca/"> {props.service}</a>
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
    description: "Home staging done at Prudhomme drive, Brampton.",
    client: "Toronto",
    date: "April 2017",
    service: "Home Staging",
    album: prudhommeImages
}

export default Modal;
