import { doc, documentId, getFirestore, writeBatch } from "firebase/firestore";
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
        return true;
        
    } catch (error) {
        console.error(`Stock Service -> ${error}`);
        return false;
    }
}


export { updateStock }