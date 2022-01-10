import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";

import CartWidget from './CartWidget';


function Navbar() {
    const [navBar, setNavBar] = useState(true);
    const location = useLocation();


    const handleScroll = () => {
        let scrollDeviceWidth = ( window.innerWidth <= 450)? 100 : 200;
        setNavBar( (window.scrollY <= scrollDeviceWidth) );
    }


    useEffect(() => {
        // solid navbar on this "pages"
        let solidOnPages = ["product","about","policy","products"];
        let condition = !solidOnPages.includes(location.pathname.split("/")[1]);

        setNavBar(condition);

        if(condition) window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[location]);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top shadow-lg ${( navBar )? "bg-translucid": "bg-amazon"}`} >
            <div className="container">
                <NavLink to="/" className='navbar-brand'>The Garden</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggle">
                    <div className="navbar-nav ms-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/products" className='nav-link'>Products</NavLink>
                        <NavLink to="/about" className='nav-link'>About</NavLink>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;