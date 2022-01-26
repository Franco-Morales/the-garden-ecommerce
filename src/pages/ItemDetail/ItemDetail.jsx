import React from 'react'
import Badge from '../../components/Badge';
import  "../../scss/pages/itemDetail.scss";


const ItemDetail = ({ product }) => {
    let newPrice = product.price-(product.price*product.isOnSale?.discount/100);
    
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
                        <hr />

                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
