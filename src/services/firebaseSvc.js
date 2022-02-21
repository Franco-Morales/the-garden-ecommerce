import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, Timestamp, where } from "firebase/firestore";


/**
 * Retorna los primeros 4 elementos de la coleccion `products` cuyo atributo `isOn.Flag` sea `true`
 * @returns {[]}
 */
const getProductsBySale = async () => {
    try {
        return ( await getFromFirestore("products") ).filter( el => el.isOnSale.flag ).slice(0, 4);
    } catch (error) {
        console.error(`Firebase Service Error : ${error}`);
    }
}


const getOrdersByUser = async (userId) => {
    try {
        return ( await getFromFirestore("orders") ).filter( el => el.buyer?.auth_id === userId);
    } catch (error) {
        console.error(`Firebase Service Error : ${error}`);
    }
}


/**
 * Obtiene una colección, un documento dado un `uid` o filtrar una coleccion dado un arreglo.
 * 
 * Ejemplo filter : `props`[property] del documento, `op`[operator] operador de firebase, `value` )
 * @param {string} colt `collection` name
 * @param {( {} | [] )} filter { uid: firebase-id } | [props, op, value] 
 * @returns {( [] | {} )}
 */
const getFromFirestore = async (colt, filter) => {
    const db = getFirestore();
    try {
        if( filter === undefined ) {
            const ref = collection( db, colt);
            const snapshot = await getDocs( ref );

            return snapshot.docs.map( el => {
                return {
                    uid: el.id,
                    ...el.data()
                }
            });
        } else if(typeof filter === "object" && filter.uid){
            const ref = doc( db, colt, filter.uid);
            const snapshot = await getDoc( ref );
            return {
                uid: snapshot.id,
                ...snapshot.data()
            }
        } else {
            const q = query( collection(db, colt), where(...filter) );
            const snapshot = await getDocs( q );

            return snapshot.docs.map( el => {
                return { uid: el.id, ...el.data() }
            });
        }
    } catch (error) {
        console.error(`Firebase Service -> ${error}`);
    }
}


const insertInFirestore = async (colt, data) => {
    const db = getFirestore();

    const auxData = {
        ...data,
        date: Timestamp.fromDate( new Date() )
    }

    try {
        const ref = collection( db, colt );

        const savedDoc = await addDoc(ref, auxData);

        return savedDoc.id;
    } catch (error) {
        console.error(`Firebase Service -> ${error}`);
    }
}


const updateInFirestore = async (colt, id, data) => {
    const db = getFirestore();

    try {
        const ref = doc(db, colt, id);
        await setDoc(ref, data, { merge: true });
        return true;
    } catch (error) {
        console.error(`Firebase Service -> ${error}`);
    }
}


export { getFromFirestore, getProductsBySale, getOrdersByUser, insertInFirestore, updateInFirestore };