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
                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-lg-8">
                        <h3 style={{'color':'#cddc39'}}>Consultation</h3>
                        <p>A consultation would include a walk-through which we do as ‘potential buyers’. This helps us determine how to showcase your home’s best features. This would result in detailed recommendations following our Real Estate Profitability Specification Form. This form will be left with the client for further reference (either for further work required from The Add Glamour Co., or as a guide for the clients use).</p><br/>
                    </div>
                    <div className="col-lg-4 img-responsive hidden-xs" style={{'overflow':'hidden'}}>
                         <img src={require('./img/handShake.png')} className="img-responsive" alt="Add Glamour consultation" />
                    </div>
                </div>
                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-lg-8">
                        <h3 style={{'color':'#cddc39'}}>GOLD</h3><br/>
                        <p>This service is suitable for occupied homes where we work with most of your furniture and add staging accessories to give your home  a completely new look to appeal  the potential buyers.</p>
                        <p>The consultation is included in this service with a report of pre-showcasing requirements. Optionally we also provide a customized staging to meet your budget.</p>
                        <p><span>FEES:<br/>$650 to $850 (Homes up to 2000 sq. ft.)<br/>$850  to $950 (Homes up to 3000 sq. ft.)</span></p>
                    </div>
                    <div className="col-lg-4 img-responsive hidden-xs" style={{'overflow':'hidden'}}>
                        <img src='http://sprucehomes.ca/wp-content/uploads/2016/08/Service-Staging-1-350x350.png'/>
                    </div>
                </div>
                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-lg-8">
                        <h3 style={{'color':'#cddc39'}}>Silver</h3><br/>
                        <p>This service is suitable for vacant homes where we will provide necessary rental furniture and accessories required to bring life to the home and give a homely feeling  appealing to the potential buyers.</p>
                        <p>The consultation is included in this service and our report will detail all the furniture and accessories that we  will bring before showcasing. We provide the right amount of furniture to minimize cost without compromising the staging.</p>
                        <p><span>FEES:<br/>The fee will range depending on your budget and requirements</span></p>
                    </div>
                    <div className="col-lg-4 img-responsive hidden-xs" style={{'overflow':'hidden','padding-top':'20px'}}>
                        <img src='http://sprucehomes.ca/wp-content/uploads/2016/08/Service-reno-1-350x350.png'/>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <h3 style={{'color':'#cddc39'}}>Platinum</h3><br/>
                        <p>This service is suitable for bigger vacant homes where we will provide necessary rental furniture and accessories required to bring life to the home and give a homely feeling  appealing to the potential buyers.</p>
                        <p>The consultation is included in this service and our report will detail all the furniture and accessories that we  will bring before showcasing. We provide the right amount of furniture to minimize cost without compromising the staging.</p>
                        <p><span>FEES:<br/>The fee will range depending on your budget and requirements</span></p>
                    </div>
                    <div className="col-lg-4 img-responsive hidden-xs" style={{'overflow':'hidden','padding-top':'20px'}}>
                        <img src='http://sprucehomes.ca/wp-content/uploads/2016/08/Service-Spruced-1-350x350.png'/>
                    </div>
                </div>
                <div className="row">
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