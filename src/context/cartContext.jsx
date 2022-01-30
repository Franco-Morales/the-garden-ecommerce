import { createContext, useContext, useReducer } from "react";
import cartReducer, { initialState } from "../reducers/cart.reducer";


const cartContext = createContext([]);

const useCartContext = () => useContext(cartContext);

function CartContextProvider({ children }) {
    const [ state, dispatch ] = useReducer(cartReducer, initialState);

    return (
        <cartContext.Provider value={{ state, dispatch }}>
            { children }
        </cartContext.Provider>
    )
}


export { useCartContext };
export default CartContextProvider;