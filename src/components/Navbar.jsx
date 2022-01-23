import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";

import CartWidget from './CartWidget';

import mockData from "../assets/json/mock-data.json";


function Navbar() {
    const [navBar, setNavBar] = useState(true);
    const location = useLocation();
    const { categories } = mockData;

    const handleScroll = () => {
        let scrollDeviceWidth = ( window.innerWidth <= 450)? 100 : 200;
        setNavBar( (window.scrollY <= scrollDeviceWidth) );
    }


    useEffect(() => {
        // solid navbar on this "pages"
        let solidOnPages = ["product","about","policy","products", "category"];
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
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle"id="catDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="catDropdown">
                                { categories.map( (category, index) => {
                                    return (
                                        <li key={index}>
                                            <Link className="dropdown-item" to={`category/${category.id}`}>{category.name}</Link>
                                        </li>
                                    )
                                }) }
                            </ul>
                        </li>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;