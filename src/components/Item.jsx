import React from 'react';
import { Link } from "react-router-dom";

import "../scss/components/card.scss";
import Badge from './Badge';


function CardProduct({ product }) {

    let newPrice = product.price-(product.price*product.isOnSale?.discount/100);

    const addToCard = (e, product) => {
        e.preventDefault();
        console.log(product);
    }

    return (  
        <div id="card-product" className="card shadow">
            <img src={product.pictureUrl} className="card-img-top" alt="product_plant" />
            <hr />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                
                <h6 className="card-subtitle my-2">
                    { 
                        (product.isOnSale?.flag && product.stock)?(
                            <>
                                <span className="text-success me-4">${newPrice}</span>
                                <span className="text-muted text-decoration-line-through">${product.price}</span>
                                <Badge background={"success"} flag={"discount"} display={`${product.isOnSale?.discount}%`}/>
                            </>
                        ): (
                            <span className="text-muted">${product.price}</span>
                        ) 
                    }
                    {
                        (product.stock === 0) && <Badge background={"danger"} flag={"stock"} display={"without stock"}/>
                    }
                </h6>
            </div>
            <div className='card-body d-grid gap-2 d-md-flex justify-content-md-center'>
                <Link className="btn btn-outline-artichoke" to={`/product/${product.uid}`}>View item</Link>
                <button className="btn btn-amazon" onClick={(e)=>addToCard(e,product)} disabled={product.stock === 0}>Add to cart</button>
            </div>
        </div>
    );
}

export default CardProduct;