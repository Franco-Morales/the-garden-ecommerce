import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import CartItem from './CartItem';

import { useStore } from "../../context/storeContext";
import TYPES from '../../context/types';

import { getFromFirestore, insertInFirestore } from '../../services/firebaseSvc';
import { checkStock, updateStock } from '../../services/stockSvc';

import "../../scss/pages/cart.scss";


const CartList = ({ cart, onRemoveItem, onClearCart }) => {
  const { state, dispatch } = useStore();
  const [ processOrder, setProcessOrder ] = useState(false);

  let auxCart = cart.map( cartItem => {
    return (cartItem.item?.isOnSale.flag) ? 
      {
        quantity: cartItem.quantity,
          item : {
            ...cartItem.item,
            price: +(cartItem.item.price-cartItem.item.price*cartItem.item.isOnSale.discount/100).toFixed(2)
          }
      } : cartItem
  });

  const total = +auxCart.reduce( (acc, cartItem) => acc+(cartItem.quantity*cartItem.item.price), 0 ).toFixed(2);


  const handleOrder = async () => {
    setProcessOrder(true);

    let itemsOrder = auxCart.map( el => ({
        uid: el.item.uid,
        title: el.item.title,
        price: el.item.price,
        quantity: el.quantity
      })
    );

    try {
      // items = items whitout stock
      let { status, message } = await checkStock(itemsOrder);

      toast[status](message, { theme: "colored", position: "bottom-right" });

      if( status === "success") {
        const buyer = await getFromFirestore("profiles",["auth_id","==",state.auth.uid]);
        const order = {
          buyer: buyer[0],
          items: itemsOrder,
          state: "Generated",
          total: total
        }

        const savedOrderId = await insertInFirestore("orders", order);

        await updateStock(itemsOrder);

        toast.info(`Order saved with id ${savedOrderId}`, { position: "bottom-right" });

        dispatch({ type: TYPES.clear });
      }
      
      setProcessOrder(false);

    } catch (error) {
      toast.error("Something went wrong. Try later", { theme: "dark", position: 'bottom-right' });
    }
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
            { (Object.entries(state.auth).length === 0) ?
              <Link to="/login" className='btn btn-outline-primary'> Sign In </Link>
              :
              <button className="btn btn-amazon" onClick={handleOrder} disabled={processOrder}>
                Order
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};


export default CartList;