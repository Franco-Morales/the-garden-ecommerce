import React from 'react'

import Item from "../../components/Item";


const ItemList = ({ products }) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            { (products.length)? products.map( el => {
                return (
                    <div className="col" key={el.uid}>
                        <Item product={el}/>
                    </div>
                )
            }) : <h5> Sin products</h5> }
        </div>
    )
}

export default ItemList