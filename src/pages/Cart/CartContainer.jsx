import React from 'react'
import EmptyResult from '../../components/EmptyResult';
import CartList from './CartList';

import { useCartContext } from "../../context/cartContext";
import { TYPES } from '../../reducers/cart.reducer';



const CartContainer = () => {
    const { state, dispatch } = useCartContext();

    const onRemoveItem = (e, uid) => {
        e.preventDefault();
        dispatch({ type: TYPES.removeItem, payload: { uid }})
    }

    const onClearCart = () => dispatch({ type: TYPES.clear });

    return (
        <div className='container' style={{ margin: "5% auto"}}>
            { state.cart.length ? 
                <CartList cart={state.cart} onRemoveItem={onRemoveItem} onClearCart={onClearCart} />
                : 
                <EmptyResult text='Empty cart'/>
            }
        </div>
    )
}

export default CartContainer;