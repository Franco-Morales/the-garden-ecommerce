const cartState = { cart: [] };


const TYPES = {
    addItem: "ADD_ITEM",
    removeItem: "REMOVE_ITEM",
    clear: "CLEAR"
};


/**
 * 
 * @param { cartState } state 
 * @param {{ type: TYPES, payload: object}} action 
 * @returns
 */
const cartReducer = (state, action) => {
    switch (action.type) {
        case TYPES.clear: {
            return { ...state, cart: [] }
        }
        case TYPES.addItem : {
            const { payload } = action;
            return ( isInCart(state.cart, payload.item?.uid) )? 
            { 
                ...state,
                cart: state.cart.map( el => {
                    if(payload.item?.uid === el.item?.uid) {
                        return {
                            ...el,
                            quantity: el.quantity+1
                        }
                    }
                    return el;
                })
            } : {
                ...state,
                cart: [ ...state.cart, payload]
            };
        }
        case TYPES.removeItem : {
            const { payload } = action;

            return {
                ...state,
                cart: state.cart.filter( el => el.item.uid !== payload.uid )
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


export { cartState, TYPES };
export default cartReducer;