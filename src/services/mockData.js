import muckData from "../assets/json/mock-data.json";

const getRadomNumber = Math.floor(Math.random() * (9 - 1)) + 1;
const { products } = muckData;

export const getAllProducts = new Promise( (resolve, reject) => {
    if(getRadomNumber <= 5) return reject("¡ Error 500 :( !");
    
    setTimeout( resolve(products), 2000 );
});

export const getOneProduct = (idProduct) => new Promise( (resolve, reject) => {
    if(getRadomNumber <= 5) return reject("¡ Error 500 :( !");
    
    setTimeout( resolve(products.find( el => el.uid === idProduct)), 2000 );
});

export const getAllByCategory = (categoryId) => new Promise( (resolve, reject) => {
    if(getRadomNumber <= 5) return reject("¡ Error 500 :( !");
    // "+" delante del string lo parsea a number 
    setTimeout( resolve( products.filter( el => el.category === +categoryId) ), 2000 );
});


export const getAllBySale = new Promise( (resolve, reject) => {
    if(getRadomNumber <= 5) return reject("¡ Error 500 :( !");
    
    setTimeout( resolve(products.filter( el => el.isOnSale?.flag === true)), 2000 );
});