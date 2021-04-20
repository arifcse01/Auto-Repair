import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [newService, setNewService] = useState({});


    const handleOnBlur = (e) =>{
        const service = newService;
        service[e.target.name] = [e.target.value];
        setNewService(service);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('https://calm-beyond-04420.herokuapp.com/addService', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(result => {
            alert("Service Added Successfully")
        })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 pt-3">
                    <h4>Add Service</h4>
                    <form onSubmit={handleSubmit} className='shadow p-3 rounded bg-gray'>
                        <div>
                            <input onBlur={handleOnBlur} className="form-control mt-3" name="title" type="text" placeholder='Service Name' id="name" />
                        </div>
                        <div>
                            <input onBlur={handleOnBlur} className="form-control mt-3" name="price" type="text" placeholder='Service Price' id="name" />
                        </div>
                        <div>
                            <input onBlur={handleOnBlur} className="form-control mt-3" name="img" type="text" placeholder='Upload Image URL' id="name" />
                        </div>
                        <div>
                            <textarea onBlur={handleOnBlur} className="form-control mt-3" name="description" type="text" placeholder="Description" id="name" />
                        </div>
                        <div>
                            <input className="btn btn-info mt-2" name="name" type="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;