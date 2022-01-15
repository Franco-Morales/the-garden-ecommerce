import React from 'react';
import { useParams } from "react-router-dom";

import  "../scss/pages/productDetail.scss";

import mockDataJson from "../assets/json/mock-data.json";

function ProductDetail() {
    let params = useParams();

    const data = mockDataJson.find( el => el.uid === params.uid);


    return (
        <div className="container" id="product-detail">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-8">
                    <img src={data.pictureUrl} alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="product-info">
                        <h1>{data.title}</h1>
                        { 
                            data.isOnSale?(
                                <>
                                    <span className="text-success me-4">${data.price*0.25}</span>
                                    <span className="text-muted text-decoration-line-through">${data.price}</span>
                                </>
                            ) : (
                                <span className="text-muted">${data.price}</span>
                            ) 
                        }
                        { data.isOnSale && <span className="badge bg-success" id="isOnSale">- 25%</span>}
                        <hr />

                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;