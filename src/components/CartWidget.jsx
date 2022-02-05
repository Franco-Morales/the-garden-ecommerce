import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from "../context/cartContext";


const CartWidget = () => {
    const { state } = useCartContext();
    
    return (
        <NavLink className='nav-link position-relative' to={"/cart"}>
            <i className="bi bi-cart"></i>
            { state.cart.length ? (   
                    <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-moss">
                        { state.cart.reduce( (acc, el) => acc + el.quantity, 0 ) }
                        <span className="visually-hidden">cart length</span>
                    </span> 
                ) : ""
            }
            
        </NavLink>
    )
}


export default CartWidget