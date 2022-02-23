import React from 'react';
import { useNavigate } from "react-router-dom";

import EmptyResult from '../../components/EmptyResult';


const OrderDetail = ({ order }) => {
  const navigate = useNavigate();

  return (
    <div className="main-page-margin">
    { ( Object.entries(order).length !== 1 ) ?
        <div className="container">

          <div className="card shadow">
            <div className="row">
              <div className="col-md-6 border-end">
                <div className="card-body">
                  <h3 className="card-title mt-3">Buyer</h3>
                </div>
                <hr className='bg-amazon'/>
                <div className="card-body">
                  <p className="card-text">User: {order.buyer?.name}</p>
                  <p className="card-text">Email: {order.buyer?.email}</p>
                  <p className="card-text">phone: {order.buyer?.phone}</p>
                  <p className="card-text">Date of purchase: {new Date(order.date.seconds * 1000).toDateString()}</p>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="card-body">
                  <h3 className="card-title text-muted">Order products</h3>
                </div>
                <hr className='bg-amazon'/>
                <div className="card-body">
                  { order.items.map( prod => 
                      (
                        <span className='card-text' key={prod.uid}>
                          <p>{prod.title}</p>
                          <p>${prod.price} x {prod.quantity} = ${prod.price*prod.quantity}</p>
                        </span>
                      )
                    )
                  }
                  <hr className='bg-success mb-3'/>
                  <b>
                    <p className='card-text'>Total: ${order.total}</p>
                  </b>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-moss mt-5" onClick={() => navigate(-1)}>
            <i className="bi bi-arrow-bar-left me-3"/>
            back to list
          </button>
        </div>
        : 
        <EmptyResult text={`Can't find Order with ${order.uid}`} />
    }
    </div>
  )
}


export default OrderDetail;