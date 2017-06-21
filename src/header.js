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
                    <div className="col-lg-12 text-center" style={{'paddingTop':'25px'}}>
                        <h2>Add Glamour</h2>
                        <h4>The Staging Company</h4>
                        <hr className="star-light"></hr>
                    </div>
                    <div className="col-lg-12">
                        <h3>Transform Your Home</h3>
                            <p>With Add Glamour Staging, your home will be the one that is chosen. Our Home Staging Services will take your property from cold and empty to warm and inviting. Whether you are a realtor, home owner, builder or developer, we have what it takes to transform your property into a visually enhanced marketable product that is sure to stand out.</p>
                            <p>The benefits of staging your listed properties are tremendous. Property staging has become an essential marketing / merchandizing tool for realtors to give them an edge in this very competitive market. Increasingly savvy real estate agents are realizing that having professional property stagers is the best way to increase their marketing effectiveness and success.</p>
                            <p>Working with any budget and time constraint, we redesign your rooms with one thing in mind – Staging your home to help you merchandize your property for the fastest sale and the best price.</p>
                            <p><span style={{'color':'purple'}}><b>Our goal</b></span> is to make you money on your investment and no matter what your budget, we can assist you in making your property the show piece it deserves to be.</p>
                            <p><span style={{'color':'purple'}}><b>Our mission</b></span> is to provide our clients with the highest level of service while maintaining the highest standards of excellence and integrity.</p>
                            <p>Whether you need a consultation only or full home staging services, we can help.</p>
                        <h3>Why choose Add Glamour ...</h3>
                            <ul>
                                <li>We understand today’s Buyer’s have high expectations and plenty of properties to choose from</li>
                                <li>We understand that it’s all about creating a lifestyle, a lifestyle that sells</li>
                                <li>We treat the property as a product that needs marketing and presentation</li>
                                <li>We use high end stunning furnishings and accessories</li>
                                <li>We design with simplicity and organization</li>
                                <li>Expect stress free staging and tailored interiors</li>
                            </ul>
                            <iframe className="hidden-xs center-block embed-responsive-item " width="853" height="480" src="https://www.youtube.com/embed/z82anwWv6EY" frameBorder="0" allowFullScreen></iframe>
                        <div className="embed-responsive embed-responsive-16by9 visible-xs">
                            <iframe className="visible-xs center-block embed-responsive-item" src="https://www.youtube.com/embed/z82anwWv6EY"></iframe>
                        </div> 
                    </div>
                </div>
                </div>
                 
            </section>
        </div>
    );
}

export default Header;