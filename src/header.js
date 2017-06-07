import React from 'react';
import Gallery from './gallery';
import Carousel from './carousel'


const Header = () => {
    return (
        <div>
            <section className="success" id="header">
                <Carousel />
            </section>
        </div>
    );
}

export default Header;