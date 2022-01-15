import React from 'react'

import Item from "./Item";


const ItemList = ({ products }) => {
    return (
        <>
            <h1>Item List</h1>
            { products.map( (el, index) => <Item key={index} product={el}/> ) }
        </>
    )
}

export default ItemList