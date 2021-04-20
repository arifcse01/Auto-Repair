import React, { useEffect, useState } from 'react';
import ManageSingleService from '../../ManageSIngleService/ManageSingleService';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:4500/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 ">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7 pt-3">
                    <h4>Manage Service</h4>
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>    
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map(service => <ManageSingleService service={service} key={service._id}></ManageSingleService>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageServices;