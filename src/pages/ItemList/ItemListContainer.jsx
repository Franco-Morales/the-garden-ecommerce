import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import ItemList from "./ItemList"
import Loading from "../../components/Loading";
import BreadCrumb from './BreadCrumb';

import { getAllProducts, getAllByCategory } from "../../services/firebaseSvc";




function ProductList() {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { cid } = useParams();
    

    useEffect(() => {
        if(cid) {
            getAllByCategory(cid)
                .then( resp => {
                    setData( resp.map( el => { return { uid: el.id, ...el.data() } }) );
                    setLoading(false);
                } )
                .catch( err => console.error(err) );
        } else {
            getAllProducts()
                .then( resp => {
                    setData( resp.map( el => { return { uid: el.id, ...el.data() } }) );
                    setLoading(false);
                })
                .catch( err => console.error(err) );
        }
    }, [cid]);


    return (
        <div style={{ marginTop: 100, marginBottom: 100}} className='container'>
            { ( loading )? <Loading /> : 
            <>
                { cid && <BreadCrumb />}
                <ItemList products={ data }/>
            </>}
        </div>
    );
    
}


export default ProductList;