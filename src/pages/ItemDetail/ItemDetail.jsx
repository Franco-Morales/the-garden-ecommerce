import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import EmptyResult from '../../components/EmptyResult';
import Badge from '../../components/Badge';
import ItemCount from './ItemCount';

import { useStore } from '../../context/storeContext';
import {  TYPES } from "../../reducers/cart.reducer";

import  "../../scss/pages/itemDetail.scss";


const ItemDetail = ({ product }) => {
    const { dispatch } = useStore();
    const [ selectedItem, setSelectedItem ] = useState( false );

    let newPrice = product.price-(product.price*product.isOnSale?.discount/100);
    

    const onAdd = (e, cantItems) => {
        e.preventDefault();
        setSelectedItem(true);
        dispatch({ 
             type: TYPES.addItem, 
             payload: { item: product, quantity: cantItems }
        });
    }

    return (
        <div className="container main-page-margin" id="product-detail">
            {
                product ? (
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-8">
                            <img src={product.pictureUrl} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <section id="product-info">
                                <h1>{product.title}</h1>
                                { 
                                    (product.isOnSale?.flag && product.stock)?(
                                        <>
                                            <span className="text-success me-4">${newPrice}</span>
                                            <span className="text-muted text-decoration-line-through me-4">${product.price}</span>
                                            <Badge background={"success"} display={`${product.isOnSale?.discount}%`}/>
                                        </>
                                    ): (
                                        <span className="text-muted">${product.price}</span>
                                    ) 
                                }
                                {
                                    (product.stock === 0) && <Badge background={"danger"} display={"Sold"} otherClass={"ms-3"}/>
                                }
                                <hr />

                                <p>{product.description}</p>
                            </section>
                            <section id="product-actions">
                                {
                                    ( selectedItem )? 
                                        <div className='d-grid gap-3 d-md-flex justify-content-md-center' id="finish-action">
                                            <Link className="btn btn-outline-artichoke" to={"/products"}>
                                                <i className="bi bi-arrow-bar-left me-2" />
                                                See more products
                                            </Link>
                                            <Link className="btn btn-amazon" to={"/cart"}>
                                                Buy now
                                                <i className="bi bi-bag-check ms-2" />
                                            </Link>
                                        </div> :
                                        <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
                                        
                                }
                            </section>
                        </div>
                    </div>
                ) : <EmptyResult text='Product not found'/>
            }
        </div>
    )
}


export default ItemDetail;