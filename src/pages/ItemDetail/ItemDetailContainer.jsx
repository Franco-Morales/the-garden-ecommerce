import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import Loading from "../../components/Loading";

import { useStore } from '../../context/storeContext';

import { getFromFirestore } from "../../services/firebaseSvc";
import { existInWishlist } from '../../services/userSvc';


function ItemDetailContainer() {
    let { prodId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { state } = useStore();


    useEffect(() => {
        const fetchDetailData = async () => {
            try {
                const resp = await getFromFirestore("products", { uid: prodId });
                // consulta si el item está la wishlist
                let existItem = false;

                if(state.auth.uid) {
                    existItem = await existInWishlist(state.auth.uid, prodId);
                }

                setProduct({ ...resp, inWishlist: existItem });
                setLoading(false);
            } catch (error) {
                console.error("error en detail container");
            }
        }

        fetchDetailData();
    }, [prodId, state.auth]);

    return ( loading )? <Loading isFullPage /> : <ItemDetail product={product}/>;
}

export default ItemDetailContainer;