import { getFromLocalStorage, persistCart, removeCart } from "../../services/storageSvc";


const TYPESCART = {
    checkCart: "CHECK_CART_STATE",
    addItem: "ADD_ITEM",
    removeItem: "REMOVE_ITEM",
    clear: "CLEAR"
};


const cartState = { cart: [] };


/**
 * 
 * @param { cartState } state 
 * @param {{ type: TYPESCART, payload: object}} action 
 * @returns
 */
const cartReducer = (state, action) => {
    switch (action.type) {
        case TYPESCART.checkCart : {
            return {
                ...state,
                cart: getFromLocalStorage() || [] 
            }
        }
        case TYPESCART.clear: {
            removeCart();

            return { ...state, cart: [] }
        }
        case TYPESCART.addItem : {
            const { payload } = action;

            const newCart =  ( isInCart(state.cart, payload.item?.uid) )? 
                state.cart.map( el => {
                    if(payload.item?.uid === el.item?.uid) {
                        return {
                            ...el,
                            quantity: el.quantity+1
                        }
                    }
                    return el;
                })
            : 
               [ ...state.cart, payload]
            
            persistCart(newCart);

            return { ...state, cart: newCart };
        }
        case TYPESCART.removeItem : {
            const { payload } = action;

            const updatedCart = state.cart.filter( el => el.item.uid !== payload.uid );

            persistCart(updatedCart);

            return {
                ...state,
                cart: updatedCart
            }
        }
        default:
            return state;
    }
}

/**
 * Función privada
 * @param {[]} cart 
 * @param {string} identifier 
 * @returns {boolean}
 */
const isInCart = (cart, identifier) => (cart.find( el => el.item?.uid === identifier) !== undefined);


export { cartState, TYPESCART };
export default cartReducer;