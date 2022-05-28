import React, { useEffect, useState } from 'react';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return (
        <div>
            <h2>{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>phone</th>
                            <th>product</th>
                            <th>order</th>
                        </tr>
                    </thead>


                    {
                        orders.map((order, index) => <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>{order.product}</td>
                                <td>{order.order}</td>

                            </tr>
                        </tbody>)
                    }

                </table>
            </div>

        </div >
    );
};

export default ManageAllOrder;