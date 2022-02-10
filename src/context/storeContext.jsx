import { createContext, useContext, useEffect, useReducer } from "react";

import cartReducer, { cartState } from "../reducers/cart.reducer";
import categoryReducer, { categoryState } from "../reducers/category.reduce";

import { getFromFirestore } from "../services/firebaseSvc";


const initialState = { ...cartState, ...categoryState };

const storeContext = createContext([]);

const useStore = () => useContext(storeContext);


const combineReducers = ( ...reducers ) => (state, action) => {
    return reducers.reduce( (acc, reducer) => reducer(acc, action), state)
}


function StoreContextProvider({ children }) {
    const rootReducer = combineReducers(cartReducer, categoryReducer);

    const [ state, dispatch ] = useReducer(rootReducer, initialState);
    
    useEffect( () => {
        getFromFirestore("categories")
            .then( resp => dispatch({ type: "ADD_CATEGORIES", payload: resp }))
            .catch( error => console.error(error));
    },[]);

    return (
        <storeContext.Provider value={{ state, dispatch }}>
            { children }
        </storeContext.Provider>
    )
}


export { useStore };
export default StoreContextProvider;