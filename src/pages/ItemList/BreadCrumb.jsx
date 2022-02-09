import React,{ useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
 
import { getFromFirestore } from "../../services/firebaseSvc";


const BreadCrumb = () => {
    const [ categories, setCategories ] = useState([]);
    const { cid } = useParams();

    useEffect( ()=> {
        getFromFirestore("categories")
            .then( resp => setCategories( resp ) )
            .catch( error => console.error(error));
    },[cid]);
    
    return (
        <div className="row">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Categories</li>
                    <li className="breadcrumb-item active" aria-current="page">
                        { categories.filter( cat => cat.uid === cid )[0]?.name }
                    </li>
                </ol>
            </nav>
            <hr />
        </div>
    )
}


export default BreadCrumb;