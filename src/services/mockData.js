import muckData from "../assets/json/mock-data.json";


export const getAllProducts = new Promise( (resolve, reject) => {
    let random = Math.floor(Math.random() * (9 - 1)) + 1;

    if(random >= 5) {
        setTimeout( resolve(muckData), 2000 );
    } else {
        reject("¡ Error 404 Not Found :( !");
    }
});