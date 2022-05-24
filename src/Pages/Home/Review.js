import React from 'react';

const Review = ({ review }) => {
    const { name, comment, img, occupation, ratings } = review;
    return (
        <div className='card w-90 bg-base-100 p-6 shadow-xl hover:drop-shadow-2xl'>
            <div>
                <p>"{comment}"</p>
                <div className="text-orange-600">
                    Ratings:  {ratings} star
                </div>
                <div className='flex items-center mt-5'>
                    <div className="w-20 rounded-full">
                        <img src={img} width='100%' alt="" />
                    </div>

                    <div className='ml-5'>
                        <h4 className='font-semibold text-accent'>{name}</h4>
                        <p><small>{occupation}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;