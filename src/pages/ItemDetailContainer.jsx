import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

import { getOneProduct } from "../services/mockData";


function ItemDetailContainer() {
    let { uid } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getOneProduct(uid)
            .then(resp => setProduct(resp))
            .catch( error => console.error(error));
    }, [uid]);

    return (
        <ItemDetail product={product}/>
    );
}

export default ItemDetailContainer;