import React from 'react'
import  "../../scss/pages/itemDetail.scss";


const ItemDetail = ({ product }) => {
    return (
        <div className="container" id="product-detail">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-8">
                    <img src={product.pictureUrl} alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="product-info">
                        <h1>{product.title}</h1>
                        { 
                            product.isOnSale?(
                                <>
                                    <span className="text-success me-4">${product.price*0.25}</span>
                                    <span className="text-muted text-decoration-line-through">${product.price}</span>
                                </>
                            ) : (
                                <span className="text-muted">${product.price}</span>
                            ) 
                        }
                        { product.isOnSale && <span className="badge bg-success" id="isOnSale">- 25%</span>}
                        <hr />

                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
