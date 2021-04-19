import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const { id } = useParams();
    const [newOrder, setNewOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4500/order/${id}`)
            .then(res => res.json())
            .then(result => setNewOrder(result))
    }, [id])
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h4>Order</h4>
                    <form action="">
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input className="form-control" name="name" type="text" placeholder='Product Name' id="name" />
                        </div>
                        <div>
                            <label htmlFor="name">Your Email</label>
                            <input className="form-control" name="name" type="text" placeholder='Product Name' id="name" />
                        </div>
                        <div>
                            <label htmlFor="name">Service Name</label>
                            <input className="form-control" name="name" type="text" value={newOrder.title} id="name" />
                        </div>
                        <div>
                            <label htmlFor="name">Service Cost</label>
                            <input className="form-control" name="name" type="text" value={newOrder.price} id="name" />
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