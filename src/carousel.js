import React from 'react';
import { connect } from 'react-redux';

const Carousel = (props) => {
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="item active">
                    <img src={require('./img/carousel/house3.jpeg')} className="img-responsive" alt="Toronto"/>
                </div>

                <div className="item">
                    <img src={require('./img/carousel/house2.jpeg')} className="img-responsive" alt="Brampton"/>
                </div>

                <div className="item">
                    <img src={require('./img/carousel/house1.jpeg')} className="img-responsive"alt="Mississauga"/> 
                </div>
                <div className="item">
                    <img src={require('./img/carousel/house4.jpeg')} className="img-responsive"alt="Mississauga"/> 
                </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
} 

const mapStateToProps = (state) => {
   return {
       aboutUs: state.aboutUs
   };
}
export default connect(mapStateToProps)(Carousel);