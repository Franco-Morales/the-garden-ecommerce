import React, { useState, useEffect} from 'react';

// import ItemCount from './ItemCount';
import ItemList from "./ItemList"
import Loading from "../../components/Loading";

import { getAllProducts } from "../../services/mockData";


function ProductList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // const onAdd = (e, cantItems) => {
    //     e.preventDefault();
    //     console.log(`Add to cart ${cantItems} items`);
    // }

    useEffect(() => {
        getAllProducts
            .then( res => setData(res) )
            .catch(err => {
                console.error(err);
                setLoading(true);
            });
    }, [])


    return (
        <div style={{ marginTop: 100 }} className='container'>
            { ( loading )? <Loading /> : <ItemList products={data}/>}
        </div>
    );
}


export default ProductList;