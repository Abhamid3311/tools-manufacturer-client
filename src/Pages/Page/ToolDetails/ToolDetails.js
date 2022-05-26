import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const ToolDetails = () => {

    let { id } = useParams();
    const [tool, setTool] = useState({});
    const { _id, name, model, made, price, quantity, mOrder, img } = tool;

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, []);


    return (
        <div>
            <div className="card w-1/2  my-10 bg-base-100 shadow-xl mx-auto">
                <figure><img src={img} alt="cars tool" className='h-52  object-cover' /></figure>
                <div className="card-body mx-auto">
                    <h2 className="card-title text-accent text-xl">Tool Name: {name}</h2>
                    <h3 className="card-title">Made By : {made}</h3>
                    <h5 className="card-title">Model No. : {model}</h5>
                    <p> <strong>Minimum Order : {mOrder}</strong> </p>
                    <p>Available Products: {quantity}</p>
                    <h4 className='text-red-600'>Price: {price} per/pec</h4>
                </div>
            </div>

        </div>
    );
};

export default ToolDetails;