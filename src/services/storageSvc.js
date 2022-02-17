const persistInLocalStorage = (data) =>{
    localStorage.setItem(`cart-${data.uid}`, JSON.stringify(data))
}

const getFromLocalStorage = (key) => JSON.parse( localStorage.getItem(key) );

const clearLocalStorage = () => localStorage.clear();


export { persistInLocalStorage, getFromLocalStorage, clearLocalStorage };