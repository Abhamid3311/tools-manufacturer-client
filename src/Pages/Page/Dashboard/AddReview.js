import React from 'react';

import { useForm } from "react-hook-form";
import useReview from '../../../hooks/useReview';

const AddReview = () => {
    const [reviews, setReviews] = useReview();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        //send to server
        const url = 'http://localhost:5000/review';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                const newReview = [...reviews, result];
                setReviews(newReview);
            })
    };

    return (
        <div>
            <h2 className='text-2xl font-semibold text-center my-10'>Please Add Your Review </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
                <input
                    class="input input-bordered input-primary w-full max-w-md mb-4"
                    {...register("name")} placeholder="name" required />
                <br />
                <input
                    class="input input-bordered input-primary w-full max-w-md mb-4"
                    {...register("occupation")} placeholder="occupation" required />
                <br />
                <input
                    class="input input-bordered input-primary w-full max-w-md mb-4"
                    type="number" {...register("ratings")} placeholder="ratings" required />
                <br />
                <input
                    class="input input-bordered input-primary w-full max-w-md mb-4"
                    {...register("img")} placeholder="Image URL" required />
                <br />
                <textarea
                    class="input input-bordered input-primary w-full max-w-md mb-4"
                    {...register("comment")} placeholder="review" required />
                <br />
                <input type="submit" className='btn btn-accent' value='Add Review' />
            </form>

        </div>
    );
};

export default AddReview;