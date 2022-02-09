import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import Loading from "../../components/Loading";

import { getFromFirestore } from "../../services/firebaseSvc";


function ItemDetailContainer() {
    let { uid } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFromFirestore("products", uid)
            .then(resp => {
                setProduct( resp );
                setLoading( false );
            })
            .catch( error => console.error(error) );
    }, [uid]);

    return ( loading )? <Loading /> : <ItemDetail product={product}/>;
}

export default ItemDetailContainer;