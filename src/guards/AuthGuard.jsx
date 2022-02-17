import React from 'react';
import { useLocation, Navigate } from "react-router-dom";
import {  useStore } from "../context/storeContext";


const AuthGuard = ({ children }) => {

    const { state } = useStore();
    const location = useLocation();
    
    return (Object.entries(state.auth).length === 0)? 
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
        :
        children
}


export default AuthGuard;
// siguiendo las recomendaciones de React Router Dom v6
// https://reactrouter.com/docs/en/v6/examples/auth