import React, { useEffect, useState } from 'react';
import SingleReview from '../../SingleReview/SingleReview';


const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://calm-beyond-04420.herokuapp.com/reviews')
            .then(res => res.json())
            .then(result => setReviews(result))
    }, [])
    return (
        <section className="pb-2 pt-5">
            <div className="container">
                <h3 className="text-center ">Reviews</h3>
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