import { createContext, useContext, useEffect, useReducer } from "react";

import cartReducer, { cartState } from "./reducers/cart.reducer";
import categoryReducer, { categoryState } from "./reducers/category.reduce";
import authReducer, { authState } from "./reducers/auth.reducer";

import { getFromFirestore } from "../services/firebaseSvc";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";


const initialState = { ...cartState, ...categoryState, ...authState };

const storeContext = createContext([]);

const useStore = () => useContext(storeContext);


const combineReducers = ( ...reducers ) => (state, action) => {
    return reducers.reduce( (acc, reducer) => reducer(acc, action), state)
}


function StoreContextProvider({ children }) {
    const rootReducer = combineReducers(cartReducer, categoryReducer, authReducer);

    const [ state, dispatch ] = useReducer(rootReducer, initialState);
    
    useEffect( () => {
        getFromFirestore("categories")
            .then( resp => dispatch({ type: "ADD_CATEGORIES", payload: resp }))
            .catch( error => console.error(error));

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                const { email, displayName: name, uid } = currentUser;

                dispatch({ type: "LOGIN_USER", payload: { email, name, uid } });
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <storeContext.Provider value={{ state, dispatch }}>
            { children }
        </storeContext.Provider>
    )
}


export { useStore };
export default StoreContextProvider;