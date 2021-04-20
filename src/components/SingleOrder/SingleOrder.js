import React from 'react';

const SingleOrder = (props) => {
    const { img, title, price, description } = props.order;
    
    return (      
        <div className="col-md-4 text-justify">
            <div className="shadow rounded p-3">
                <img className="img-fluid w-100" src={img} alt="" />
                <h4>{title}</h4>
                <p>${price}</p>
                <p>{description}</p>
            </div>
        </div>
        
    );
};

export default SingleOrder;