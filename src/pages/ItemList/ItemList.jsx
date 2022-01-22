import React from 'react'

import Item from "../../components/Item";


const ItemList = ({ products }) => {
    return (
        <div className="row">
            <div className="col-12">
                <h1>Products</h1>
            </div>
            { products.map( el => {
                return (
                    <div className="col-12 col-md-6 col-lg-4">
                        <Item key={el.uid} product={el}/>
                    </div>
                )
            }) }
        </div>
    )
}

export default ItemList