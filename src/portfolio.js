import React from 'react';
import Modal from './modal';
import Navbar from './navbar';
import Footer from './footer';
import { rainforestImages, folkstoneImages } from './files/images';

const portfolioModal = [
    {id: '#portfolioModal1', address: '140 Rainforest Drive', city: 'Brampton', img: require('./img/Portfolio/Rainforest/IMG_0015.jpg')},
    {id: '#portfolioModal2', address: '140 Rainforest Drive', city: 'Brampton', img: require('./img/Portfolio/Prudhomme/IMG_0009.jpg')},
    {id: '#portfolioModal3', address: '140 Rainforest Drive', city: 'Brampton', img: require('./img/Portfolio/Prudhomme/IMG_0012.jpg')},
    {id: '#portfolioModal4', address: '140 Rainforest Drive', city: 'Brampton', img: require('./img/Portfolio/Prudhomme/IMG_0024.jpg')},
    {id: '#portfolioModal5', address: '140 Rainforest Drive', city: 'Brampton', img: require('./img/Portfolio/Prudhomme/IMG_0029.jpg')},
    {id: '#portfolioModal6', address: '140 Rainforest Drive', city: 'Brampton', img: require('./img/Portfolio/Prudhomme/IMG_0033.jpg')},
];

const modal = [
    { id: 'portfolioModal1',album: rainforestImages, client:'Brampton', date:'June 2017', description:'Home staging done at 140 Rainforest drive, Brampton.'},
    { id: 'portfolioModal2',album: rainforestImages, client:'Brampton', date:'May 2017', description:'Condo Staging'},
    { id: 'portfolioModal3',album: rainforestImages, client:'Malton', date:'March 2017', description:'Commercial property staging'},
    { id: 'portfolioModal4',album: rainforestImages, client:'Malton', date:'Decempber 2017', description:'Vacant home staging'},
    { id: 'portfolioModal5',album: rainforestImages, client:'Woodbine', date:'October 2016', description:'Condo Staging'},
    { id: 'portfolioModal6',album: rainforestImages, client:'Vaughan', date:'April 2017', description:'Home staging'}
];

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
                        { portfolioModal.map((item,index) => 
                            <div className="col-sm-4 portfolio-item" key={index}>
                                <a href={item.id} className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                            <div style={{'padding':'10px'}}>
                                            <span>{item.address}<br/> {item.city}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={item.img} className="img-responsive" alt="Add glamour decoration"></img>
                                </a>
                            </div>
                        )}
                    </div>

                    <iframe className="hidden-xs center-block embed-responsive-item " width="853" height="480" src="https://www.youtube.com/embed/z82anwWv6EY" frameBorder="0" allowFullScreen></iframe>
                    <div className="embed-responsive embed-responsive-16by9 visible-xs">
                        <iframe className="visible-xs center-block embed-responsive-item" src="https://www.youtube.com/embed/z82anwWv6EY"></iframe>
                    </div>

                </div>
            </section>

                {/*Portfolio Modals*/}
                {modal.map((item,index) =>
                    <Modal
                        key={index}
                        album={item.album}
                        id={item.id}
                        client={item.client}
                        date={item.date}
                        description={item.description}
                    />
                )}

<<<<<<< HEAD
=======
                <Modal
                    album={folkstoneImages}
                    id='portfolioModal2'
                    client='Brampton'
                    date='September 2017'
                    description='Home staging done at 182 Folkstone Crescent, Brampton.'/>
                <Modal
                    id='portfolioModal3'
                    city='Malton'
                    date='March 2017'
                    service='Commercial property staging'/>
                <Modal
                    id='portfolioModal4'
                    city='Malton'
                    date='December 2016'
                    service='Vacant home staging'/>
                <Modal
                    id='portfolioModal5'
                    city='Woodbine'
                    date='October 2016'
                    service='Condo Staging'/>
                <Modal
                    id='portfolioModal6'
                    city='Vaughan'
                    date='April 2016'
                    service='Home Staging'/>
>>>>>>> 8e59d036bfe559b4a8b075d01358b204339162ba
            <Footer />
            </div>
        );
    }

export default Portfolio;
