import React, { useEffect, useState } from 'react';
import Loading from "../../components/Loading";

import { useStore } from "../../context/storeContext";

import { getOrdersByUser } from "../../services/firebaseSvc";
import OrderList from './OrderList';


const OrdersContainer = () => {
  const [ ordersList, setOrderList ] = useState();
  const [ isLoading, setLoading ] = useState(true);

  const { state } = useStore();


  useEffect( () => {
    getOrdersByUser(state.auth?.uid)
      .then( resp => {
        setOrderList(resp);
        setLoading(false);
      })
      .catch(error => console.error(error))
  },[ state.auth?.uid ])


  return ( isLoading ? 
    <Loading isFullPage />
    :
    <div className='main-page-margin'>
      <OrderList orders={ordersList}/>
    </div>
  )
}

export default OrdersContainer;