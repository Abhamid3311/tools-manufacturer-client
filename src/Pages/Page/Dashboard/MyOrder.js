import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useTools from '../../../hooks/useTools';
import { AiFillDelete } from 'react-icons/ai';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [tools] = useTools();

    useEffect(() => {
        fetch(`https://lit-retreat-00129.herokuapp.com/order/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user]);

    const handleDeleteMyOrder = (email) => {

    }

    return (
        <div>
            <h2 className='text-2xl font-semibold mb-5'>My Orders : {orders.length}</h2>

            <table class="table w-full">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Bill</th>
                        <th>Order</th>
                    </tr>
                </thead>


                {
                    orders.map(order => <tbody>
                        <tr>
                            <th>{order.name}</th>
                            <th>{order.product}</th>
                            <th>{order.order}</th>
                            <th>{order.price}</th>
                            <th><button className='btn btn-ghost'>Pay</button></th>
                            <th><button onClick={() => handleDeleteMyOrder(user?.email)} className='btn btn-ghost text-2xl text-red-500'>
                                <AiFillDelete></AiFillDelete>
                            </button></th>
                        </tr>
                    </tbody>)


                }
            </table>
            <div class="overflow-x-auto">

            </div>
        </div>
    );
};

export default MyOrder;