import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SingleOrder from '../../SingleOrder/SingleOrder';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        fetch('https://calm-beyond-04420.herokuapp.com/orderList?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                {
                    orderList.map(order => <SingleOrder order={order} key={order._id}></SingleOrder>)
                }

            </div>
        </div>
    );
};

export default OrderList;