import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ItemList from "./ItemList"
import Loading from "../../components/Loading";
import BreadCrumb from './BreadCrumb';

import { getFromFirestore } from "../../services/firebaseSvc";


function ProductList() {
    const [ data, setData ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const { cid } = useParams();

    useEffect(() => {
        let filter = (cid) && ["category","==",cid];
        
        getFromFirestore("products", filter)
            .then( resp => {
                setData(resp);
                setLoading(false);
            })
            .catch( error => console.error(error) );
        
    }, [cid]);

    return (
        <div style={{ margin: "100px auto"}} className='container'>
            { ( isLoading )? <Loading /> : 
                <>
                    { cid && <BreadCrumb />}
                    <ItemList products={ data }/>
                </>
            }
        </div>
    );
}


export default ProductList;