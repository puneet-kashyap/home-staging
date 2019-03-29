import React from "react";
import Gallery from "./gallery";

const Modal = props => {
  return (
    <div
      className="portfolio-modal modal fade"
      id={props.id}
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-content">
        <div className="close-modal hidden-xs" data-dismiss="modal">
          <div className="lr">
            <div className="rl" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="modal-body">
                <h2>{props.header}</h2>
                <hr className="star-primary" />
                <Gallery album={props.album} />
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  style={{ marginTop: "40px" }}
                >
                  <i className="fa fa-times" /> Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  id: "0",
  header: "Staging Project",
  album: [
    {
      original: require("./img/Portfolio/Prudhomme/IMG_0013.jpg"),
      thumbnail: require("./img/Portfolio/Prudhomme/IMG_0013.jpg")
    }
  ]
};

export default Modal;
