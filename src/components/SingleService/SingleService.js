import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const {img, title, description, price, _id} = props.service;
    return (
        <div className="col-md-4 p-2">
            <img className="img-fluid pb-2" src={img} alt=""/>
            <h4>{title}</h4>
            <p>${price}</p>
            <p>{description}</p>  
            <Link to={`/dashboard/${_id}`}><button className="btn btn-info">Book Now</button> </Link>        
        </div>
    );
};

export default SingleService;