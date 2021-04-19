import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [review, setReview] = useState({});

    const history = useHistory();

    const handleOnBlur = (e) =>{
        const newReview = review;
        newReview[e.target.name] = [e.target.value];
        setReview(newReview);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        fetch('http://localhost:4500/addReview', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(result =>{
            alert('Review Added Successfully');
            history.replace('/');           
        })
    }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h4>Review</h4>
                    <form onSubmit={handleSubmit} className='shadow p-3 rounded bg-gray'>
                        <div>                            
                            <input onBlur={handleOnBlur} className="form-control mt-3" name="title" type="text" placeholder='Your Name' id="name" />
                        </div>
                        <div>                            
                            <input onBlur={handleOnBlur} className="form-control mt-3" name="designation" type="text" placeholder='Designation, Company Name' id="name" />
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

export default AddReview;