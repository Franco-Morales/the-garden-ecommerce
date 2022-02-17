import React from 'react'
import Badge from "../../components/Badge";


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

export default CartItem;