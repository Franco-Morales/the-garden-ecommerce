import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

import { useStore } from "../../context/storeContext";
import TYPES from '../../context/types';

import { getFromFirestore, insertInFirestore } from '../../services/firebaseSvc';
import { updateStock } from '../../services/stockSvc';

import "../../scss/pages/cart.scss";


const CartList = ({ cart, onRemoveItem, onClearCart }) => {
  const { state, dispatch } = useStore();

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


  const handleOrder = async () => {
    const buyer = await getFromFirestore("profiles",["auth_id","==",state.auth.uid]);

    const order = {
      buyer: buyer[0],
      items: auxCart.map( el => ({
          uid: el.item.uid,
          title: el.item.title,
          price: el.item.price,
          quantity: el.quantity
        })
      ),
      total: total
    }

    try {
      const savedOrderId = await insertInFirestore("orders", order);
      alert(`Su orden numero ${savedOrderId}`);

      dispatch({ type: TYPES.clear });

      await updateStock(order.items);

    } catch (error) {
      console.error(error);
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
              <button className="btn btn-outline-amazon" onClick={handleOrder} >
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