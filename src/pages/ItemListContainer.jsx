import React, { useState, useEffect} from 'react';

// import ItemCount from '../components/ItemCount';
import ItemList from "../components/ItemList"

import { getAllProducts } from "../services/mockData";


function ProductList() {
    let style = { margin: "15% auto"}
    const [data, setData] = useState([]);
    // const onAdd = (e, cantItems) => {
    //     e.preventDefault();
    //     console.log(`Add to cart ${cantItems} items`);
    // }

    useEffect(() => {
        getAllProducts
            .then( res => setData(res) )
            .catch(err => console.error(err));
    }, [])


    return (
        <div style={style} className='container'>
            <h1>¡ ItemListContainer works !</h1>
            <hr />
            {/* <ItemCount stock={7} initial={1} onAdd={onAdd} />
            <ItemCount stock={0} initial={1} onAdd={onAdd} /> */}

            <ItemList products={data}/>
        </div>
    );
}


export default ProductList;