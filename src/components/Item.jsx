import React from 'react';
import { Link } from "react-router-dom";

import "../scss/components/card.scss";


function CardProduct({ product }) {

    const addToCard = (e, product) => {
        e.preventDefault();
        console.log(product);
    }

    return (  
        <div id="card-product" className="card shadow">
            { product.isOnSale && <span className="badge bg-success ms-4" id="isOnSale">- 25%</span>}
            <img src={product.pictureUrl} className="card-img-top" alt="product_plant" />
            <hr />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                
                <h6 className="card-subtitle my-2">
                { 
                    product.isOnSale?(
                        <>
                            <span className="text-success me-4">${product.price*0.25}</span>
                            <span className="text-muted text-decoration-line-through">${product.price}</span>
                        </>
                    ): (
                        <span className="text-muted">${product.price}</span>
                    ) 
                }
                </h6>
            </div>
            <div className='card-body d-grid gap-2 d-md-flex justify-content-md-center'>
                <Link className="btn btn-outline-artichoke" to={`/product/${product.uid}`}>View item</Link>
                <button className="btn btn-amazon" onClick={(e)=>addToCard(e,product)}>Add to cart</button>
            </div>
        </div>
    );
}

export default CardProduct;