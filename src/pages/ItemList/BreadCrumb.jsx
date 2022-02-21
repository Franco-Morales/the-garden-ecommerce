import React from "react";
import { Link, useParams } from "react-router-dom";
import { useStore } from "../../context/storeContext";


const BreadCrumb = () => {
    const { cid } = useParams();
    const { state } = useStore();
    
    return (
        <>
            <nav aria-label="breadcrumb" className="mb-2">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="breadcrumb-item">Categories</li>
                    <li className="breadcrumb-item active" aria-current="page">
                        { state.categories.filter( cat => cat.uid === cid )[0]?.name }
                    </li>
                </ol>
            </nav>
            <hr className="mb-5"/>
        </>
    )
}


export default BreadCrumb;