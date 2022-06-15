import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Tool = ({ tool, handleBuyNow }) => {
    const { _id, name, model, made, price, quantity, minOrder, img, description } = tool;
    return (
        <div>
            <div className="card w-90 bg-base-100 shadow-xl">
                <figure><img src={img} alt="cars tool" className='h-52 w-full object-cover' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-accent">{name}</h2>
                    <h3 className="card-title">Made By : {made}</h3>
                    <h5 className="card-title">Model No. : {model}</h5>
                    <p> <strong className='text-secondary'>Minimum Order : {minOrder}</strong> </p>
                    <p>Available : {quantity}</p>
                    <h4 className='text-red-600'>Price: {price} per/pec</h4>
                    <p className="card-title text-gray-400">{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleBuyNow(_id)} className="btn btn-accent text-white w-full text-lg">
                            <span className='mr-1'>Buy Now</span> <AiOutlineArrowRight></AiOutlineArrowRight>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;