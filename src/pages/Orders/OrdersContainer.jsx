import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Loading from "../../components/Loading";
import OrderList from './OrderList';

import { useStore } from "../../context/storeContext";

import { getOrdersByUser } from "../../services/firebaseSvc";


const OrdersContainer = () => {
  const [ ordersList, setOrderList ] = useState();
  const [ isLoading, setLoading ] = useState(true);

  const { state } = useStore();


  useEffect( () => {
    const fetchUserOrders = async () => {
      try {
        const resp = await getOrdersByUser(state.auth?.uid);
        setOrderList(resp);
        setLoading(false);
      } catch (error) {
        toast.error("Something went wrong. Try later", { theme: "dark", position: 'bottom-right' });
      }
    }

    fetchUserOrders();
  },[ state.auth ])


  return ( isLoading ? 
    <Loading isFullPage />
    :
    <div className='main-page-margin'>
      <OrderList orders={ordersList}/>
    </div>
  )
}

export default OrdersContainer;