import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import Loading from "../../components/Loading";

import { getOneProduct } from "../../services/mockData";


function ItemDetailContainer() {
    let { uid } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getOneProduct(uid)
            .then(resp => setProduct(resp))
            .catch( error => {
                console.error(error);
                setLoading(true);
            });
    }, [uid]);

    return ( loading )? <Loading /> : <ItemDetail product={product}/>;
}

export default ItemDetailContainer;