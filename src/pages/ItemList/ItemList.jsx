import React from 'react'

import Item from "../../components/Item";
import EmptyResult from "../../components/EmptyResult";


const ItemList = ({ products }) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            { (products.length)? products.map( el => {
                return (
                    <div className="col" key={el.uid}>
                        <Item product={el}/>
                    </div>
                )
            }) : <EmptyResult text='No search results'/>}
        </div>
    )
}

export default ItemList