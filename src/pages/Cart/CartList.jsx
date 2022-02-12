import React from 'react';
import Badge from "../../components/Badge";

import "../../scss/pages/cart.scss";

const CartItem = ({ prod, onRemoveItem }) => {
  return (
    <div className="card mb-3 shadow" id="cart-item">
      <div className="card-body">
        <img src={prod.item.pictureUrl} alt="" className='cart-item-img'/>
      </div>
      <div className="card-body">
        <h3>
          {prod.item.title}
        </h3>
        <p>
          { (prod.item?.isOnSale.flag)? (
            <>
              <span className='me-3'>
                <i className="text-success me-2">{+( prod.item.price-(prod.item.price*prod.item.isOnSale?.discount/100) ).toFixed(2)}</i>
                x { prod.quantity }
              </span>
              <i className="text-muted text-decoration-line-through me-3">{prod.item.price}$</i>
              <Badge background="success" flag="discount" display={`${prod.item.isOnSale?.discount}%`}/>
            </>
          ) : (
            <i>{ prod.item.price }$ x { prod.quantity }</i>
          )}
        </p>
      </div>
      <div className="card-body" id='cart-actions'>
        <button className='btn btn-artichoke' onClick={(e) => onRemoveItem(e, prod.item.uid)}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  )
}


const CartList = ({ cart, onRemoveItem, onClearCart }) => {
  let auxCart = cart.map( (el) => {
    if(el.item.isOnSale.flag) {
      return {
        quantity: el.quantity,
        item : {
          ...el.item,
          price: +(el.item.price-el.item.price*el.item.isOnSale.discount/100).toFixed(2)
        }
      }
    }
    return el;
  });

  const total = +auxCart.reduce( (acc, el) => acc+(el.quantity*el.item.price), 0 ).toFixed(2);

  const handleOrder = () => {

    const order = {
      buyer: {
        name: "Franco",
        email: "franco@email.com",
        phone: "12-12345-6789"
      },
      items: auxCart.map( el => ({
          uid: el.item.uid,
          title: el.item.title,
          price: el.item.price,
          quantity: el.quantity
        })
      ),
      total: total
    }

    console.log(order);
  }
  return (
    <div className="row">
      <div className="col-md-8">
        <div id="cart-item-wrap">
          {
            cart.map( (el,index) => <CartItem key={`${index}-${Date.now()}`} onRemoveItem={onRemoveItem} prod={el}/>)
          }
        </div>
        <button className='btn btn-danger my-5' onClick={onClearCart}>
          Clear
          <i className="bi bi-cart-x ms-3"></i>
        </button>
      </div>
      <div className="col-md-4">
        <div className="card shadown">
            <div className="card-header text-center">
              <h4>Sumary</h4>
            </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {
                auxCart.map( (el,index) => (
                    <li className="list-group-item" key={`${Date.now()}-${index}`}>
                      <p>{el.item.title}</p>
                      <p>
                        <i>{ el.item.price } $ x { el.quantity } : { el.item.price*el.quantity } $</i>
                      </p>
                    </li>
                  )
                )
              }
            </ul>
          </div>
          <div className="card-footer">
            <h5 className='ms-3'>
              Total: { total }$
            </h5>
          </div>
          <div className="card-footer d-grid px-5 py-auto">
            <button className="btn btn-outline-amazon" onClick={handleOrder}>Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CartList;