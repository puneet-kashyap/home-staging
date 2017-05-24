import React from 'react';
import Gallery from './gallery';

var skill = "Sonia Bhardwaj";
var skillSet = "Real Estate Professional - Home Staging expert - Reliable Consultant";

const Header = () => {
    return (
        <div style={{'height':'600px', 'overflow':'hidden'}}>
            <Gallery />
        </div>
    );
}

export default Header;