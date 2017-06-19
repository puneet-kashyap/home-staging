import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Services = (props) => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Services</h2>
                        <hr className="star-primary"></hr>
                    </div>
                </div>
                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-lg-8">
                        <h3 style={{'color':'#cddc39'}}>Consultation</h3>
                        <p>{props.services.consultation.p1}</p>
                        <h4 style={{'color':'palegoldenrod'}}>FEES:</h4>
                            <p>{props.prices.consultation.small}  (Homes up to 1500 sq. ft.)
                            <br/>{props.prices.consultation.medium} (Homes up to 3500 sq. ft.)
                            <br/>{props.prices.consultation.large} (Homes up to 5000 sq. ft.)
                        </p>
                    </div>
                    <div className="col-lg-4 img-responsive hidden-xs" style={{'overflow':'hidden'}}>
                         <img src={require('./img/handShake.png')} className="img-responsive" alt="Add Glamour consultation" />
                    </div>
                </div>
                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-lg-8">
                        <h3 style={{'color':'#cddc39'}}>SILVER Package</h3>
                        <p>{props.services.gold.p1}</p>
                        <p>{props.services.gold.p2}</p>
                        <h4 style={{'color':'palegoldenrod'}}>FEES:</h4>
                            <p>{props.prices.gold.small} (Homes up to 2000 sq. ft.)
                            <br/>{props.prices.gold.medium} (Homes up to 3500 sq. ft.)
                            <br/>{props.prices.gold.large} (Homes up to 5000 sq. ft.)
                        </p>
                    </div>
                    <div className="col-lg-4 img-responsive hidden-xs" style={{'overflow':'hidden'}}>
                        <img src={require('./img/Services/Service1.png')} className="img-responsive" alt="Add Glamour Gold package" />
                    </div>
                </div>
                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-lg-8">
                        <h3 style={{'color':'#cddc39'}}>GOLD Package</h3>
                        <p>{props.services.silver.p1}</p>
                        <p>{props.services.silver.p2}</p>
                        <h4 style={{'color':'palegoldenrod'}}>FEES:</h4>
                        <p>The fee will range depending on your budget and requirements.<br/>
                        <Link to='/contact'>Contact Us </Link>for more details.</p>
                    </div>
                    <div className="col-lg-4 img-responsive hidden-xs" style={{'overflow':'hidden','paddingTop':'20px'}}>
                        <img src={require('./img/Services/Service2.png')} className="img-responsive" alt="Add Glamour Silver package" />
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <h3 style={{'color':'#cddc39'}}>Platinum Package</h3>
                        <p>{props.services.platinum.p1}</p>
                        <p>{props.services.platinum.p2}</p>
                        <h4 style={{'color':'palegoldenrod'}}>FEES:</h4>
                        <p>The fee will range depending on your budget and requirements.<br/>
                        <Link to='/contact'>Contact Us </Link>for more details.</p>
                    </div>
                    <div className="col-lg-4 img-responsive hidden-xs" style={{'overflow':'hidden','paddingTop':'20px'}}>
                        <img src={require('./img/Services/Service3.png')} className="img-responsive" alt="Add Glamour Platinum package" />
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

const mapStateToProps = (state) => {
   return {
       services: state.services, 
       prices:state.prices
   };
}
export default connect(mapStateToProps)(Services);