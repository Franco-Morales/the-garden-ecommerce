const initialState = { cart: [] };


const TYPES = {
    addItem: "ADD_ITEM",
    clear: "CLEAR"
};


/**
 * 
 * @param { initialState } state 
 * @param {{ type: TYPES, payload: object}} action 
 * @returns
 */
const cartReducer = (state, action) => {
    switch (action.type) {
        case TYPES.clear: {
            return { cart: [] }
        }
        case TYPES.addItem : {
            const { payload } = action;

            return ( isInCart(state.cart, payload.item?.uid) )? 
            { 
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
                cart: [ ...state.cart, payload]
            };
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


export { initialState, TYPES };
export default cartReducer;