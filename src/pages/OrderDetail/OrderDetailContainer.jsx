import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loading from "../../components/Loading";
import OrderDetail from "../OrderDetail/OrderDetail";

import { getFromFirestore } from '../../services/firebaseSvc';


const OrderDetailContainer = () => {
  const { orderId } = useParams();
  const [ order, setOrder ] = useState({});
  const [ isLoading, setLoading ] = useState(true);


  useEffect( () => {
    const fetchOrders = async () => {
      try {
        const resp = await getFromFirestore("orders",{ uid: orderId });
        setOrder(resp);
        setLoading(false);
      } catch (error) {
        console.error(error)
      }
    }

    fetchOrders()
  },[orderId])

  return isLoading ? <Loading /> : <OrderDetail order={order}/>

}


export default OrderDetailContainer;