import React from 'react';
import { Link } from "react-router-dom";

import "../scss/components/footer.scss";


const Footer = () => {
    return (  
        <footer className='bg-artichoke text-white'>
            <div className="container pt-5 pb-4">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3>The Garden</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3>Navigate</h3>
                        <ul className='ps-0'>
                            <li>
                                <Link to="/products" >Products</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3>Legal</h3>
                        <ul className='ps-0'>
                            <li>
                                <Link to="/policy">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 text-center">
                        <h6>&copy; 2021 | The Garden E-commerce </h6>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;