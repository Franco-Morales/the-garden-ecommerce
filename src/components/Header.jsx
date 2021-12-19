import React from 'react';

import  "../scss/header.scss";

function Header() {
    return ( 
        <header id="header-home">
            <div className='wrap-content'>
                <div className='overlay-text bg-translucid text-light border border-light'>
                    <h1>The Garden</h1>
                    <hr />
                    <p>Best E-Commerce for buy indoors plants</p>
                </div>
            </div>
        </header>
    );
}

export default Header;