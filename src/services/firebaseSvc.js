import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";


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


export { getFromFirestore, getProductsBySale };