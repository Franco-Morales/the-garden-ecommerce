import React from 'react';
import { Link } from 'react-router-dom';

import EmptyResult from '../../components/EmptyResult';

import "../../scss/pages/wishlist.scss";


const Wishlist = ({ list, addToCart, removeItem }) => {

  return list.length ? 
    (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>My Wishlist</h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
          {
            list.map( el => (
              <div className="card my-5 shadow border border-light" key={el.uid} id="wish-item">
                <div className="row g-0">
                  <div className="col-md-2 border-end">
                    <img src={el.pictureUrl} className="img-fluid rounded-start" alt={`Wishlist item ${el.title}`} />
                  </div>
                  <div className="col-md-8 ms-4">
                    <div className="card-body">
                      <h5 className="card-title">{el.title}</h5>
                      <p className="card-text">Price: ${el.isOnSale.flag? el.price-(el.price*el.isOnSale.discount/100) : el.price}</p>
                      <p className='card-text'>Stock: {el.stock}</p>
                    </div>
                    <div className="wishlist-actions">
                      <Link to={`/product/${el.uid}`} className="btn btn-outline-amazon">
                        See product
                      </Link>
                      <button className='btn btn-leaf mx-3' onClick={(e) => addToCart(e, el)} disabled={el.stock === 0}>
                        Add to cart 
                      </button>
                      <button className='btn btn-danger' onClick={(e) => removeItem(e, el)}>
                        Remove from my Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    )  : <EmptyResult text='Empty Wishlist'/>
}


export default Wishlist;