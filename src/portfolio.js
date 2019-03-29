import React from "react";
import Modal from "./modal";
import Navbar from "./navbar";
import Footer from "./footer";
import fire from "./fire";

let portfolioModal, modals;

if (!sessionStorage.getItem("snapshot")) {
  portfolioModal = [
    {
      id: "#portfolioModal1",
      img: require("./img/Portfolio/Rainforest/IMG_0015.jpg")
    }
  ];

  modals = [
    {
      id: "portfolioModal1",
      album: {
        original: require("./img/Portfolio/Rainforest/IMG_0015.jpg"), 
        thumbnail: require("./img/Portfolio/Rainforest/IMG_0015.jpg")}
    }
  ];
  setInterval(function() {
    if (sessionStorage.getItem("snapshot")) {
      window.location.reload();
    }
  }, 100);
} else {
  modals = [];
  const storage = JSON.parse(sessionStorage.getItem("snapshot"));
  portfolioModal = Object.values(storage.gallery);

  portfolioModal.map((item, index) => {
    const pix = Object.values(item);
    let finalPix = [];
    pix.map(item => {
      finalPix.push({ original: item, thumbnail: item });
      return null;
    });
    modals.push({ id: index, album: finalPix });
    return null;
  });

  fire.database().ref("gallery").once("value").then(snapshot => {
      let rawSnap = Object.values(snapshot.val());
      rawSnap.map((item, index) => {
        let pix = Object.values(item);
        let finalPix = [];
        pix.map(item => {
          finalPix.push({ original: item, thumbnail: item });
          return null;
        });
        modals.push({ id: index, album: finalPix });
        return null;
      });
    });
}

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <section className="success" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Portfolio</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row test">
            {portfolioModal.map((item, index) => (
              <div className="col-sm-4 portfolio-item" key={index}>
                <a
                  href={"#" + index}
                  className="portfolio-link"
                  data-toggle="modal"
                >
                  <div className="caption">
                    <div className="caption-content">
                      <i className="fa fa-search-plus fa-3x" />
                      <div style={{'padding':'10px'}}>
                      </div>
                    </div>
                  </div>
                  <img
                    src={Object.values(item)[0]}
                    className="img-responsive"
                    alt="Add glamour decoration"
                  />
                </a>
              </div>
            ))}
          </div>

          <iframe
            className="hidden-xs center-block embed-responsive-item "
            width="853"
            height="480"
            src="https://www.youtube.com/embed/z82anwWv6EY"
            frameBorder="0"
            allowFullScreen
          />
          <div className="embed-responsive embed-responsive-16by9 visible-xs">
            <iframe
              className="visible-xs center-block embed-responsive-item"
              src="https://www.youtube.com/embed/z82anwWv6EY"
            />
          </div>
        </div>
      </section>

      {/*Portfolio Modals*/}
      {modals.map((item, index) => (
        <Modal
          key={index}
          album={item.album}
          id={item.id}
          client="Brampton"
          date="Brampton"
          description="Brampton"
        />
      ))}
      <Footer />
    </div>
  );
};

export default Portfolio;
