import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import ItemList from "./ItemList";
import Loading from "../../components/Loading";
import BreadCrumb from './BreadCrumb';

import { getFromFirestore } from "../../services/firebaseSvc";


function ProductList() {
    const [ data, setData ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const { cid } = useParams();

    useEffect(() => {

        const fetchProducts = async () => {
            let filter = (cid) && ["category","==",cid];

            try {
                const resp = await getFromFirestore("products", filter);

                setData(resp);
                setLoading(false);

            } catch (error) {
                toast.error("Something went wrong. Try later", { theme: "dark", position: 'bottom-right' });
            }
        }
        
        fetchProducts();
    }, [cid]);

    return (
        <div className='container main-page-margin'>
            { ( isLoading )? <Loading isFullPage /> : 
                <>
                    { cid && <BreadCrumb />}
                    <ItemList products={ data }/>
                </>
            }
        </div>
    );
}


export default ProductList;