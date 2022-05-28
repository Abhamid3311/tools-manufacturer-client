import React, { useEffect, useState } from 'react';
import useReview from '../../hooks/useReview';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div id='review' className='my-12'>
            <h2 className='text-accent text-4xl text-center font-bold my-12'>Testimonial</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;