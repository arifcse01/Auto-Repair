import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';


const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4500/reviews')
            .then(res => res.json())
            .then(result => setReviews(result))
    }, [])
    return (
        <section className="mt-5">
            <div className="container">
                <h2 className="text-center">Reviews</h2>
                <div className="row">
                    {
                        reviews.map(review => <SingleReview review={review} key={review._id}></SingleReview>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Review;