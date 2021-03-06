import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`https://calm-beyond-04420.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(result => setOrder(result))
    }, [id])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();    

    const handleAddOrder = (e) =>{
        const newOrder = {...loggedInUser, ...order}
        e.preventDefault();
        fetch('https://calm-beyond-04420.herokuapp.com/addOrder', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)            
        })
        .then(res => res.json())
        .then(data => {
            alert("Order Successfully Completed");
            history.replace('/');
        })
    }

    return (
        <div className="container-fluid">
            <div className="row pt-3">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7">
                    <h4>Order</h4>
                    <form onSubmit={handleAddOrder}>
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input className="form-control" name="name" type="text" value={loggedInUser.name} id="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input className="form-control" name="email" type="text" value={loggedInUser.email} id="email" />
                        </div>
                        <div>
                            <label htmlFor="service">Service Name</label>
                            <input className="form-control" name="title" type="text" value={order.title} id="service" />
                        </div>
                        <div>
                            <label htmlFor="cost">Service Cost</label>
                            <input className="form-control" name="price" type="text" value={order.price} id="cost" />
                        </div>
                        <div>
                            <input className="btn btn-info mt-2" name="name" type="Submit" value="Pay" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;