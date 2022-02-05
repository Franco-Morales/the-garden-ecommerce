import React from 'react';
import { Link } from "react-router-dom";

import "../scss/components/emptyResult.scss";
import EmptyImgSVG from "../assets/images/empty_results.svg";


const EmptyResult = ({ text = "" }) => {
  return (
    <div id='empty-comp'>
        <img src={EmptyImgSVG} alt="empty_cart_img" id="empty-comp-img"/>
        <h3 className='text-center my-3'>{ text }</h3>
        <Link className="btn btn-artichoke" to="/products" id='empty-comp-link'>
            <i className="bi bi-arrow-bar-left me-2" /> 
            See more products 
        </Link>
    </div>
  );
};


export default EmptyResult;
