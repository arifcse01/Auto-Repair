import React, { useEffect, useState } from 'react';
import ShowAllOrders from '../../ShowAllOrders/ShowAllOrders';
import Sidebar from '../Sidebar/Sidebar';

const AllOrderList = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() =>{
        fetch('https://calm-beyond-04420.herokuapp.com/allOrderList')
        .then(res => res.json())
        .then(data => setAllOrders(data));
    }, [])

    return (
        <div className='container-fluid row'>
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 pt-3">
                <h4>Total Orders</h4>
                <table className="table">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Pay With</th>
                    </thead>
                    <tbody>
                        {
                            allOrders.map(order => <ShowAllOrders order={order} key={order._id}></ShowAllOrders>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrderList;