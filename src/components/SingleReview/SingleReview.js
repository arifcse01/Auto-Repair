import React from 'react';

const SingleReview = (props) => {
    const { img, title, description, designation } = props.review;
    return (
        <div className="col-md-4 col-12 mt-3">
            <div className="shadow rounded p-3">
                <div className="d-flex align-items-center mt-2">
                    <div>
                        <img style={{ width: "80px", height: "80px", borderRadius: "50%" }} className="img-fluid mr-3" src={img} alt="" />
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <p>{designation}</p>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleReview;