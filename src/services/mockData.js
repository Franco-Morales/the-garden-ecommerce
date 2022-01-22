import muckData from "../assets/json/mock-data.json";

const getRadomNumber = Math.floor(Math.random() * (9 - 1)) + 1;


export const getAllProducts = new Promise( (resolve, reject) => {

    if(getRadomNumber <= 5) return reject("¡ Error 500 :( !");
    
    setTimeout( resolve(muckData), 2000 );
});

export const getOneProduct = (idProduct) => new Promise( (resolve, reject) => {

    if(getRadomNumber <= 5) return reject("¡ Error 500 :( !");
    
    setTimeout( resolve(muckData.find( el => el.uid === idProduct)), 2000 );
});