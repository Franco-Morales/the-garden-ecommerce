import React from 'react';
import "../../scss/pages/cart.scss";

const CartItem = ({ prod, onRemoveItem }) => {
  return (
    <div className="card mb-3" id="cart-item">
      <div className="card-body">
        <img src={prod.item.pictureUrl} alt="" className='cart-item-img'/>
      </div>
      <div className="card-body">
        <h3>
          {prod.item.title}
        </h3>
        <p>
          <i>{prod.item.price }$ x { prod.quantity }</i>
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
  return (
    <div className="row">
      <div className="col-md-6">
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
        <div className="card">
            <div className="card-header text-center">
              <h4>Sumary</h4>
            </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {
                cart.map( (el,index) => (
                    <li className="list-group-item" key={`${Date.now()}-${index}`}>
                      <p>{el.item.title}</p>
                      <p>
                        <i>{el.item.price }$ x { el.quantity } : { el.item.price*el.quantity }$</i>
                      </p>
                    </li>
                  )
                )
              }
            </ul>
          </div>
          <div className="card-footer">
            <h5 className='ms-3'>
              Total: {cart.reduce( (acc, el) => acc+(el.quantity*el.item.price), 0 )}$
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CartList;