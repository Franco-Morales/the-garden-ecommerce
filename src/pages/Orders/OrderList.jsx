import React from 'react';
import { Link } from 'react-router-dom';
import EmptyResult from '../../components/EmptyResult';


const OrderList = ({ orders }) => {
  return ( orders.length ?
    <div className="container mb-5">
        <div className="row">
            <div className="col-12">
                <h1>My orders</h1>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-12">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Buyer</th>
                            <th scope="col">Time</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map( order => 
                            (
                                <tr key={order.uid}>
                                    <th scope="row">{order.uid}</th>
                                    <td>{order.buyer?.name}</td>
                                    <td>{new Date(order.date.seconds * 1000).toDateString()}</td>
                                    <td>
                                        <Link to={`order/${order.uid}`} className="btn btn-moss">See Order</Link>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    :
    <EmptyResult text={"No orders aviable"} />
  )
}


export default OrderList;