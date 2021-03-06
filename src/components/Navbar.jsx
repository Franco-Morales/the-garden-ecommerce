import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";

import CartWidget from './CartWidget';

import { useStore } from '../context/storeContext';
import TYPES from '../context/types';

import { logOut } from "../services/auth";
import { toast } from 'react-toastify';


const Dropdown = ( props ) => {
    return (
        <li className={`nav-item dropdown ${props.className}`}>
            <span className="nav-link dropdown-toggle" id={`${props.text}-dropdown`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                { props.text }
            </span>
            <ul className="dropdown-menu" aria-labelledby={`${props.text}-dropdown`}>
                { props.children }
            </ul>
        </li>
    )
};


const Navbar = () => {
    const [navBar, setNavBar] = useState(true);
    const { state, dispatch } = useStore();
    const location = useLocation();

    const profileLinks = [
        {
            link: "/profile",
            LinkName: "Profile",
            iconClass: "bi bi-person-square" 
        },
        {
            link: "/orders",
            LinkName: "My Orders",
            iconClass: "bi bi-card-list" 
        },
        {
            link: "/wishlist",
            LinkName: "Wishlist",
            iconClass: "bi bi-bookmark-star" 
        }
    ];


    const handleScroll = () => {
        let scrollDeviceWidth = ( window.innerWidth <= 450)? 100 : 200;
        setNavBar( scrollDeviceWidth <= window.scrollY );
    }


    useEffect(() => {
        if((location.pathname === "/") && (window.scrollY === 0)) {
            setNavBar(prevState => !prevState);
            window.addEventListener("scroll", handleScroll);
        } else {
            setNavBar(true);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    },[location]);


    const onLogout = async () => {
        let { status, message } = await logOut();

        toast[status](message, { theme: "colored", position: "bottom-right"});

        dispatch({ type: TYPES.logout });
        dispatch({ type: TYPES.clear });
    }

    
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
                        <Dropdown  text="Categories">
                        { 
                            state.categories.map( (cat, index) => 
                                (
                                    <li key={`${index}-${cat.uid}`}>
                                        <Link className="dropdown-item" to={`category/${cat.uid}`}>{cat.name}</Link>
                                    </li>
                                ) 
                            )
                            
                        }
                        </Dropdown>
                        <CartWidget />
                        { (Object.entries(state.auth).length === 0) ? 
                            <Link to="/login" className='btn btn-outline-blond ms-5'>Sign In</Link>
                            :
                            <Dropdown text={state.auth.email} className="ms-5">
                                { 
                                    profileLinks.map( ( el, index) => 
                                        <li key={index}>
                                            <Link className="dropdown-item d-flex justify-content-between" to={`${el.link}/${state.auth.uid}`}>
                                                {el.LinkName}
                                                <i className={el.iconClass}/>
                                            </Link>
                                        </li>
                                    )
                                }
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <button className="dropdown-item d-flex justify-content-between" type='button' onClick={onLogout}>
                                        Logout 
                                        <i className="bi bi-box-arrow-in-right"/>
                                    </button>
                                </li>
                            </Dropdown> 
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;