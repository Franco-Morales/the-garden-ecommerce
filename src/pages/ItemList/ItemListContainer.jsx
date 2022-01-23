import React, { useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";

// import ItemCount from './ItemCount';
import ItemList from "./ItemList"
import Loading from "../../components/Loading";

import { getAllProducts, getAllByCategory } from "../../services/mockData";
import muckData from "../../assets/json/mock-data.json";


function ProductList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { cid } = useParams();
    // const onAdd = (e, cantItems) => {
    //     e.preventDefault();
    //     console.log(`Add to cart ${cantItems} items`);
    // }

    useEffect(() => {
        if(cid) {
            getAllByCategory(cid)
                .then( res => {console.log(res);setData(res)} )
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
                { cid && (
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
                    </div>
                )}
                <ItemList products={data}/>
            </>}
        </div>
    );
    
}


export default ProductList;