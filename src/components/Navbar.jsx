import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";

import CartWidget from './CartWidget';

import { getCategories } from '../services/firebaseSvc';


function Navbar() {
    const [navBar, setNavBar] = useState(true);
    const [ categories, setCategories ] = useState([]);
    const location = useLocation();
    

    const handleScroll = () => {
        let scrollDeviceWidth = ( window.innerWidth <= 450)? 100 : 200;
        setNavBar( scrollDeviceWidth <= window.scrollY );
    }


    useEffect( ()=> {
        getCategories()
            .then( resp => setCategories( resp.map( cat => { return { uid: cat.id, ...cat.data()} }) ) )
            .catch( error => console.error(error));
    },[]);


    useEffect(() => {
        if((location.pathname === "/") && (window.scrollY === 0)) {
            setNavBar(false);
            window.addEventListener("scroll", handleScroll);
        } else {
            setNavBar(true)
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[location]);

    
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top shadow-lg ${( navBar )? "bg-amazon": "bg-translucid"}`} >
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
                                {
                                    categories.map( (category, index) => {
                                        return (
                                            <li key={`${index}-${category.uid}`}>
                                                <Link className="dropdown-item" to={`category/${category.uid}`}>{category.name}</Link>
                                            </li>
                                        )
                                    })
                                }
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