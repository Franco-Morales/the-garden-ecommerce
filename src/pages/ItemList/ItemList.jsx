import React from 'react'

import Item from "../../components/Item";
import EmptyResult from "../../components/EmptyResult";


const ItemList = ({ products }) => {
    return (
        <>
            {
                products.length? (
                    <div className='row row-cols-1 row-cols-md-4 g-4'>
                        { products.map( el => {
                            return (
                                <div className="col" key={el.uid}>
                                    <Item product={el}/>
                                </div>
                            )
                        }) }
                    </div>
                ) : <EmptyResult text='No results'/>
            }
        </>
    )
}


export default ItemList;