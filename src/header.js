import React from 'react';
import Gallery from './gallery';


const Header = () => {
    return (
        <div style={{'height':'600px', 'overflow':'hidden'}}>
            <Gallery />
        </div>
    );
}

export default Header;