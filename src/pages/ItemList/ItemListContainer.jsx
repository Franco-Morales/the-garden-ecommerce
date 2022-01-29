import React, { useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";

import ItemList from "./ItemList"
import Loading from "../../components/Loading";

import { getAllProducts, getAllByCategory } from "../../services/mockData";
import muckData from "../../assets/json/mock-data.json";


const BreadCrumb = ({ cid }) => {
    return (
        <div className="row">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Categories</li>
                    <li className="breadcrumb-item active" aria-current="page">{ muckData.categories.filter( cat => cat.id === +cid )[0].name }</li>
                </ol>
            </nav>
            <hr />
        </div>
    )
}

function ProductList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { cid } = useParams();
    

    useEffect(() => {
        if(cid) {
            getAllByCategory(cid)
                .then( res => setData(res) )
                .catch(err => {
                    console.error(err);
                    setLoading(true);
                }); 
        } else {
            getAllProducts
                .then( res => setData(res) )
                .catch(err => {
                    console.error(err);
                    setLoading(true);
                });
        }
    }, [cid]);


    return (
        <div style={{ marginTop: 100 }} className='container'>
            { ( loading )? <Loading /> : 
            <>
                { cid && <BreadCrumb cid={cid} />}
                <ItemList products={data}/>
            </>}
        </div>
    );
    
}


export default ProductList;