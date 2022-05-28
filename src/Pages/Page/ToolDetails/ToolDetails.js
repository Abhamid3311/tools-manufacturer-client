import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';


const ToolDetails = () => {
    const [user] = useAuthState(auth);
    let { id } = useParams();
    const [tool, setTool] = useState({});
    const [order, setOrder] = useState({});
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const { name, model, made, price, quantity, minOrder, img, myOrder } = tool;

    useEffect(() => {
        const url = `https://lit-retreat-00129.herokuapp.com/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, []);

    //Handle Increse Button
    const handleIncreseBtn = (id) => {
        const updateTool = { ...tool, myOrder: tool.myOrder + 1 };
        setTool(updateTool);

        //send to Server
        const url = `https://lit-retreat-00129.herokuapp.com/tools/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTool)
        })
            .then(res => res.json())
            .then(result => {
                console.log('success', result);
            });
    };

    //Handle Decrese Button
    const handleDecreseBtn = (id) => {
        const updateTool = { ...tool, myOrder: tool.myOrder - 1 };
        setTool(updateTool);

        //send to Server
        const url = `https://lit-retreat-00129.herokuapp.com/tools/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTool)
        })
            .then(res => res.json())
            .then(result => {
                console.log('success', result);
            });
    };

    //Total Price
    const totalPrice = myOrder * price;

    const handlePurchaseForm = e => {
        e.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            address: address,
            phone: phone,
            product: name,
            order: myOrder,
            price: totalPrice
        };
        console.log(order);

        //send to server
        const url = 'https://lit-retreat-00129.herokuapp.com/order';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Purchase Submitted');
                const newOrder = [...order, result];
                setOrder(newOrder);
            });
    };


    return (
        <div>
            <div className="card w-1/2  my-10 bg-base-100 shadow-xl mx-auto ">
                <figure><img src={img} alt="cars tool" className='h-52  object-cover' /></figure>
                <div className="card-body mx-auto">
                    <h2 className="card-title text-accent text-xl">Tool Name: {name}</h2>
                    <h3 className="card-title">Made By : {made}</h3>
                    <h5 className="card-title">Model No. : {model}</h5>
                    <p> <strong>Minimum Order : {minOrder}</strong> </p>
                    <p>Available Products: {quantity}</p>
                    <h4 className='text-red-600'>Price: {price} per/pec</h4>
                    <h4 className='text-accent'>Your Order: {myOrder} </h4>
                </div>
            </div>

            {/* Purchase Form */}
            <div class="hero min-h-screen mx-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left ">
                        <h1 class="text-5xl font-bold text-accent mb-5">Purchase Your Tools now!</h1>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-2xl">Enter Quantity</span>
                            </label>
                            <input type="number" value={myOrder} disabled class="input input-bordered" />
                        </div>
                        <div className='mt-5'>
                            <button onClick={() => handleIncreseBtn(id)} className='btn bg-green-400 text-black'>Increse</button>
                            <button onClick={() => handleDecreseBtn(id)} className='btn bg-red-400 text-black'>Decrese</button>
                        </div>
                    </div>



                    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <form class="card-body" onSubmit={handlePurchaseForm}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" value={user?.displayName} class="input input-bordered" disabled />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" value={user?.email} disabled class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input
                                    onChange={event => setAddress(event.target.value)}
                                    type="text"
                                    placeholder="Address"
                                    class="input input-bordered"
                                />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone Number</span>
                                </label>
                                <input
                                    onChange={event => setPhone(event.target.value)}
                                    type="text"
                                    placeholder="phone"
                                    name="phone"
                                    class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">My Order Quantity</span>
                                </label>
                                <input type="number" value={myOrder} disabled class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Total Price</span>
                                </label>
                                <input type="number" value={totalPrice} class="input input-bordered" />
                            </div>


                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Purchase</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolDetails;