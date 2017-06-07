import React from 'react';
import Gallery from './gallery';
import Carousel from './carousel'


const Header = () => {
    return (
        <div>
            <section className="success" id="header">
                <Carousel />
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 text-center" style={{'padding-top':'25px'}}>
                        <h2>Add Glamour</h2>
                        <h4>The Staging Company</h4>
                        <hr className="star-light"></hr>
                    </div>
                    <div className="col-lg-12">
                        <h3 style={{'color':'#cddc39'}}>Transform Your Home</h3>
                            <p>With Add Glamour Staging, your home will be the one that is chosen. Our Home Staging Services will take your property from cold and empty to warm and inviting.</p>
                            <p>A proven real estate strategy used by home owners and realtors across North America, home staging is the art of making your property as aesthetically pleasing and inviting as possible. This, in turn, can help sell your home quickly and for top dollar.</p>
                            <p>Working with any budget and time constraint, we redesign your rooms with one thing in mind – Staging your home to help you merchandize your property for the fastest sale and the best price.</p>
                            <p>Whether you need a consultation only or full home staging services, we can help.</p>
                        <h3 style={{'color':'#cddc39'}}>Why choose Add Glamour ...</h3>
                            <ul>
                                <li>We understand today’s Buyer’s have high expectations and plenty of properties to choose from</li>
                                <li>We understand that it’s all about creating a lifestyle, a lifestyle that sells</li>
                                <li>We treat the property as a product that needs marketing and presentation</li>
                                <li>We use high end stunning furnishings and accessories</li>
                                <li>We design with simplicity and organization</li>
                                <li>Expect stress free staging and tailored interiors</li>
                            </ul>
                    </div>

                </div>
                </div>
            </section>
        </div>
    );
}

export default Header;