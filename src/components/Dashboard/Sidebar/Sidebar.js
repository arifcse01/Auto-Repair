import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';

const Sidebar = () => {
    const sidebar = {
        background: "pink",
        height: "100%",
        color: "white",
        padding: "5px",
        paddingBottom: '100%'
    }
    
    return (
        <div>
            <div style={sidebar} className="sidebar pt-3">
                <h2>Dashboard</h2>
                <h4><Link to="/home">Home</Link></h4>
                <h4><Link to="/OrderList">Order List</Link></h4>
                <h4><Link to="/reviews">Add Review</Link></h4>
                <h4><Link to="/totalOrder">Order Info</Link></h4>
                <h4><Link to="/addService">Add Service</Link></h4>
                <h4><Link to="/manageServices">Manage Service</Link></h4>
            </div>
        </div>
    );
};

export default Sidebar;