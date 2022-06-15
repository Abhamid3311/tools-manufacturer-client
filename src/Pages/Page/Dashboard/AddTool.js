import React from 'react';
import { useForm } from "react-hook-form";
import useTools from '../../../hooks/useTools';

const AddTool = () => {
    const [tools, setTools] = useTools();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        //send to server
        const url = 'https://lit-retreat-00129.herokuapp.com/tools';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                const newTool = [...tools, result];
                setTools(newTool);
            })
    };
    return (
        <div>
            <h2 className='text-2xl font-semibold text-center my-10'>Add New Tool </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
                <input
                    class="input input-bordered input-accent w-full max-w-md mb-4"
                    {...register("name")} placeholder="Tool name" required />
                <br />

                <input
                    class="input input-bordered input-accent w-full max-w-md mb-4"
                    {...register("model")} placeholder="model" required />
                <br />
                <input
                    class="input input-bordered input-accent w-full max-w-md mb-4"
                    {...register("made")} placeholder="made by" required />
                <br />

                <input
                    class="input input-bordered input-accent w-full max-w-md mb-4"
                    {...register("img")} placeholder="Image URL" required />
                <br />

                <textarea
                    class="input input-bordered input-accent w-full max-w-md mb-4"
                    {...register("description")} placeholder="tool description" required />
                <br />

                <div>
                    <input
                        class="input input-bordered input-accent w-full lg:w-2/5 max-w-md mb-4 mr-5"
                        {...register("price")} placeholder="price" required />

                    <input
                        class="input input-bordered input-accent w-full lg:w-2/5 max-w-md mb-4"
                        {...register("quantity")} placeholder="quantity" required />
                </div>

                <div>
                    <input
                        class="input input-bordered input-accent mr-5 w-full lg:w-2/5  max-w-md mb-4"
                        type="number" {...register("minOrder")} placeholder="minOrder" required />
                    <input
                        class="input input-bordered input-accent mr-5 w-full lg:w-2/5  max-w-md mb-4"
                        type="number" {...register("myOrder")} placeholder="myOrder" required />
                </div>

                <input type="submit" className='btn btn-accent' value='Add Tool' />
            </form>

        </div>
    );
};

export default AddTool;