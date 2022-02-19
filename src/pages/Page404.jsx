import React from 'react';
import { useNavigate } from "react-router-dom";

import "../scss/pages/p404.scss";
import Svg404 from '../assets/images/p_404.svg';


function Error404() {
    let navigate = useNavigate();


    const handleNAvigate = (e) => {
        e.preventDefault();
        navigate("/");
    }


    return ( 
        <div className="container" id="p-404">
            <div className="row">
                <div className="col-12">
                    <img src={Svg404} alt="Page_not_found_image" />
                </div>
                <div className="col-12">
                    <h1>¡ Page Not found !</h1>
                    <button className="btn btn-amazon my-4" onClick={handleNAvigate}>Go back to Home Page</button>
                </div>
            </div>
        </div>
    );
}


export default Error404;