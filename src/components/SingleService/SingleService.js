import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = (props) => {
    const { img, title, description, price, _id } = props.service;
    return (
        <div className="animation col-md-4 col-12 mt-3">
            <div className="p-3">
                <img className="img-fluid" src={img} alt="" />
                <h4>{title}</h4>
                <p>${price}</p>
                <p>{description}</p>
                <Link to={`dashboard/dashboard/${_id}`}><button className="btn btn-info">Book Now</button> </Link>
            </div>
        </div>
    );
};

export default SingleService;