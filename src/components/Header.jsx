import React from 'react';

import  "../scss/components/header.scss";


const Header = () => {
    return ( 
        <header id="header-home" className='shadow'>
            <div className='wrap-content'>
                <div className='overlay-text bg-translucid text-light border border-blond'>
                    <h1>The Garden</h1>
                    <hr className='text-blond'/>
                    <p>Best E-Commerce for buy indoors plants</p>
                </div>
            </div>
        </header>
    );
}


export default Header;