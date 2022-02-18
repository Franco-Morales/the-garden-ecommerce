const persistCart = (cart) => localStorage.setItem( "cart", JSON.stringify( cart ) );

const getFromLocalStorage = () => JSON.parse( localStorage.getItem( "cart" ) );

const removeCart = () => localStorage.removeItem("cart");


export { persistCart, getFromLocalStorage, removeCart };