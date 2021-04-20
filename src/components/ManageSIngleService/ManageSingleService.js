import React from 'react';
import { useHistory } from 'react-router';

const ManageSingleService = (props) => {

    const { _id, title, price } = props.service;
    const history = useHistory();

    const handleDeleteService = () => {
        fetch(`http://localhost:4500/deleteService/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                alert("delete successfully");
                history.push('/manageServices');
            })
    }

    return (
        <tr>
            <td>{title}</td>
            <td>${price}</td>
            <td><button onClick={handleDeleteService} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default ManageSingleService;