import React from 'react'

import Item from "../../components/Item";


const ItemList = ({ products }) => {
    return (
        <div className="row">
            { (products.length)? products.map( el => {
                return (
                    <div className="col-12 col-md-6 col-lg-4" key={el.uid}>
                        <Item product={el}/>
                    </div>
                )
            }) : <h5> Sin products</h5> }
        </div>
    )
}

export default ItemList