import React from 'react';

import ItemCount from '../components/ItemCount';


function ProductList() {
    let style = { margin: "15% auto"}

    const onAdd = (e, cantItems) => {
        e.preventDefault();
        console.log(`Add to cart ${cantItems} items`);
    }

    return (
        <div style={style} className='container'>
            <h1>¡ ItemListContainer works !</h1>
            <hr />
            <ItemCount stock={7} initial={1} onAdd={onAdd} />
            <ItemCount stock={0} initial={1} onAdd={onAdd} />
        </div>
    );
}


export default ProductList;