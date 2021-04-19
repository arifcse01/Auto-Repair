import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Sidebar = () => {
    const sidebar = {
        background: "pink",
        height: "100%",
        color: "white",
        padding: "5px"
    }
    return (
        <div>
            <div style={sidebar} className="sidebar">
                <h2>Dashboard</h2>
                <h4><Link>Order</Link></h4>
                <h4><Link to="/OrderList">Order List</Link></h4>
                <h4><Link to="/reviews">Add Review</Link></h4>
                <h4><Link to="/manageReview">Manage Review</Link></h4>
            </div>
        </div>
    );
};

export default Sidebar;