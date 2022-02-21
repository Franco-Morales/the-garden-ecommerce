import { documentId } from "firebase/firestore";

import { getFromFirestore, updateInFirestore } from "./firebaseSvc";


const getWishlist = async (userId) => {
    try {
        const profile = await getFromFirestore("profiles",["auth_id","==",userId]);
        const itemsIds = profile[0].wishlist;

        const wishlistItems = itemsIds.length? ( await getFromFirestore("products",[documentId(), "in", itemsIds]) ) : [];

        return wishlistItems;
    } catch (error) {
        console.error(`Firebase Auth -> ${error}`);
    }
}

const addTowishlist = async (userId, prodId) => {
    try {
        const { uid: profileId, wishlist } = ( await getFromFirestore("profiles",["auth_id","==",userId]) )[0];

        const updatedWishlist = [ ...wishlist, prodId ];

        await updateInFirestore("profiles", profileId, { wishlist: updatedWishlist });
    } catch (error) {
        console.error(`Firebase Auth -> ${error}`);
    }
}

const removeFromWishlist = async (userId, prodId) => {
    try {
        const { uid: profileId, wishlist } = ( await getFromFirestore("profiles",["auth_id","==",userId]) )[0];

        const updatedWishlist = wishlist.filter( uid => uid !== prodId );

        await updateInFirestore("profiles", profileId, { wishlist: updatedWishlist });
    } catch (error) {
        console.error(`Firebase Auth -> ${error}`);
    }
}

const existInWishlist = async (userId, prodId) => {
    try {
        const { wishlist } = ( await getFromFirestore("profiles",["auth_id","==",userId]) )[0];
        
        return wishlist.includes( prodId );
    } catch (error) {
        console.error(`Firebase Auth -> ${error}`);
    }
}


export { getWishlist, addTowishlist, removeFromWishlist, existInWishlist }