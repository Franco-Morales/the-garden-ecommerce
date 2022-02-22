import { doc, documentId, getDoc, getFirestore, writeBatch } from "firebase/firestore";
import { getFromFirestore } from "./firebaseSvc";


const updateStock = async (itemsOrder) => {
    const db = getFirestore();
    const batch = writeBatch(db);

    try {

        const productsFromFirestore = await getFromFirestore(
            "products", 
            [ documentId() , "in", itemsOrder.map( item => item.uid ) ]
        );

        for (let product of productsFromFirestore) {
            const docRef = doc(db, "products", product.uid);

            batch.update(docRef, {
                stock: product.stock - itemsOrder.find( el => el.uid === product.uid).quantity
            });
        }

        batch.commit();
        
    } catch (error) {
        console.log(error);
    }
}

const checkStock = async (itemsOrder) => {
    const db = getFirestore();
    let stockOrder = [];

    try {
        const productsFromFirestore = await getFromFirestore(
            "products", 
            [ documentId() , "in", itemsOrder.map( item => item.uid ) ]
        );

        for (let product of productsFromFirestore) {
            const ref = doc(db, "products", product.uid);
            const prodDb = await getDoc(ref);

            const prodStockDb = prodDb.data().stock;

            const prodStockOrder = ( itemsOrder.find( el => el.uid === prodDb.id) ).quantity;
            

            stockOrder.push( prodStockDb - prodStockOrder );
        }

        if(stockOrder.every( el => el >= 0)) {
            return {
                status: "success",
                message: "Aviable stock"
            }
        } else {
            return {
                status: "warning",
                message: "Out of stock",
            }
        }
    } catch (error) {
        console.log(error);
        return {
            status: "error",
            message: "Can't update stock"
        }
    }
}


export { updateStock, checkStock };