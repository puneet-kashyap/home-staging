import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Services = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Services</h2>
                        <hr className="star-light"></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3 style={{'color':'#cddc39'}}>Consultation</h3>
                        <p>A consultation would include a walk-through which we do as ‘potential buyers’. This helps us determine how to showcase your home’s best features. This would result in detailed recommendations following our Real Estate Profitability Specification Form. This form will be left with the client for further reference (either for further work required from The Home Staging Co., or as a guide for the clients use).</p><br/>
                    </div>
                     <div className="col-lg-12">
                        <h3 style={{'color':'#cddc39'}}>Furniture Arrangement and De-Cluttering</h3>
                        <p>Re-arranging the furniture along with reducing the clutter will benefit in making the rooms appear as large as possible and give an overall feeling of space. Sometimes, this service is all that is required to make a big difference in how your home shows to potential buyers.</p>
                        <p>We can suggest current trends that along with a neat, scaled down appearance helps to showcase your home in the best possible manner and ensure you the best possible return for your efforts.</p><br/>
                    </div>
                     <div className="col-lg-12">
                        <h3 style={{'color':'#cddc39'}}>Makeover</h3>
                        <p>It may become necessary in some cases to suggest cosmetic improvements. For example a more neutral colour palette or the removal of worn carpet or outdated wallpaper would greatly enhance the decor. In order to accomplish this, we offer a complete design service. Although we do our best to work with what you already have in the way of furniture and accessories, this service could also include the rental of key furniture pieces for home staging when necessary. Our goal is to create a home that any potential buyer would love to own. See some examples.</p><br/>
                    </div> 
                    <div className="col-lg-12">
                        <h3 style={{'color':'#cddc39'}}>Staging Vacant Homes</h3>
                        <p>Occasionally, home owners have to move before their home has been sold. In these instances, our complete design service would address decor and furniture rentals to create the image you want to present to potential buyers. An atmosphere that is warm and inviting would be created for maximum appeal.</p><br/>
                    </div>  
                </div>
            </div>
        </section>
        <Footer />
        </div>
    );
} 

export default Services;