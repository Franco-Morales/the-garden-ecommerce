import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";


const getCategories = async () => {
    const db = getFirestore();

    try {
        const ref = collection(db, "categories");
        const docSnapshots = await getDocs( ref );
        return docSnapshots.docs;
    } catch(error) {
        console.error(`Firebase Service Error : ${error}`);
    }
}

const getAllProducts = async () => {
    const db = getFirestore();

    try {
        const ref = collection(db, "products")
        const docSnapshots = await getDocs( ref );
        return docSnapshots.docs;
    } catch (error) {
        console.error(`Firebase Service Error : ${error}`);
    }
}

const getOneProduct = async (uid) => {
    const db = getFirestore();

    try {
        const ref = doc(db, "products", uid);
        const docSnap = await getDoc( ref );
        
        if(!docSnap.exists()) {
            return false;
        }

        return { uid: docSnap.id, ...docSnap.data()};
    } catch (error) {
        console.error(`Firebase Service Error : ${error}`);
    }
}

const getAllByCategory = async (categoryId) => {
    const db = getFirestore();
    try {
        const q = query( collection(db, "products"), where("category", "==", categoryId) );
        const docSnapshots = await getDocs( q );

        return docSnapshots.docs;
    } catch (error) {
        console.error(`Firebase Service Error : ${error}`);
    }
}

const getAllBySale = async () => {
    try {
        
    } catch (error) {
        console.error(`Firebase Service Error : ${error}`);
    }
}



export { getAllProducts, getOneProduct, getAllByCategory, getAllBySale, getCategories };