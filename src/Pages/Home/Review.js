import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Review = ({ review }) => {
    const { name, comment, img, occupation, ratings } = review;
    return (
        <div className='card w-1/2 border-2  bg-base-100 text-left p-8 hover:shadow-2xl'>
            <div>
                <p>" {comment} "</p>
                <div className="text-orange-600 text-2xl mt-3 flex flex-row items-center">
                    <p className='mr-3 text-bold'>{ratings}</p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
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