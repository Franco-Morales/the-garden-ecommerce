import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import EmptyResult from '../../components/EmptyResult';
import Badge from '../../components/Badge';
import ItemCount from './ItemCount';

import { useStore } from '../../context/storeContext';
import TYPES from "../../context/types";

import  "../../scss/pages/itemDetail.scss";
import { addTowishlist } from '../../services/userSvc';


const WishlistActions = ({ product }) => {
    const { state } = useStore();

    const [ existInWislist, setExistInWishlist ] = useState(product.inWishlist);
    const [ isLoading, setLoading ] = useState(false);


    const onAddToWishlist = async (e) => {
        e.preventDefault();

        setLoading(prevState => !prevState);

        await addTowishlist(state.auth.uid, product.uid);
        setExistInWishlist(true);

        setLoading(prevState => !prevState);
    }


    if(isLoading) {
        return (
            <button className="btn btn-leaf" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
        )
    } else {
        if(state.auth.uid && !existInWislist) {
            // esta logueado y no existe en la wishlist
            return (
                <button className='btn btn-outline-leaf' type='button' onClick={onAddToWishlist}>
                    Add to wishlist
                    <i className="ms-3 bi bi-bookmark-star"/>
                </button>
            )
        } else if(state.auth.uid && existInWislist){
            // esta logueado y existe en la wishlist
            return (
                <Link to={`/wishlist/${state.auth.uid}`} className="btn btn-leaf">
                    Go to wishlist
                    <i className="ms-3 bi bi-bookmark-star-fill"/>
                </Link>
            )
        } else {
            // no esta logueado
            return (
                <Link to="/login" className='btn btn-outline-primary'>
                    Login to add to wishlist
                    <i className="ms-3 bi-box-arrow-in-right"/>
                </Link>
            )
        }
    }
}


const ItemDetail = ({ product }) => {
    const { dispatch } = useStore();

    const [ selectedItem, setSelectedItem ] = useState( false );
    
    let newPrice = +( product.price-(product.price*product.isOnSale?.discount/100) ).toFixed(2);
    

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
            { (Object.entries(product).length !== 1) ? 
                (
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-8">
                            <img src={product.pictureUrl} alt={`${product.title}_image`} className="img-fluid" loading='lazy'/>
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
                                <p className="my-3">Stock : <span className={`text-${product.stock? "success":"danger"}`}>{product.stock}</span></p>
                                <hr />

                                <p>{product.description}</p>
                            </section>
                            <section id="product-actions">
                                {
                                    ( selectedItem )? 
                                        <div className='d-grid gap-3 d-md-flex justify-content-md-center mt-5 mb-3' id="finish-action">
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
                                <div className="d-grid">
                                    <WishlistActions product={product} />
                                </div>
                            </section>
                        </div>
                    </div>
                ) : <EmptyResult text='Product not found'/>
            }
        </div>
    )
}


export default ItemDetail;