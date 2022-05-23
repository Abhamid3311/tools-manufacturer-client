import React from 'react';

const Tool = ({ tool }) => {
    const { name, model, made, price, quantity, mOrder, img } = tool;
    return (
        <div>
            <div class="card w-90 bg-base-100 shadow-xl">
                <figure><img src={img} alt="cars tool" className='h-52 w-full object-cover' /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <h3 class="card-title">Model No. : {model}</h3>
                    <p> <strong>Min-Order Quantity : {mOrder}</strong> </p>
                    <p>Available Quantity : {quantity}</p>
                    <h4 className='text-red-600'>Price: {price} BDT</h4>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;