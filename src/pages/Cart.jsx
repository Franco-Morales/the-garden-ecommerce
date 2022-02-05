import React from 'react'
import { useCartContext } from "../context/cartContext";


const Cart = () => {
    const { state } = useCartContext();
    return (
        <div style={{margin: "10% 5%"}}>
            <h1>¡ Cart works !</h1>
            <pre>
                {JSON.stringify(state.cart, null, 2)}
            </pre>
        </div>
    )
}

export default Cart;