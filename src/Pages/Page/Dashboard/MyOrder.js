import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return (
        <div>
            <h2>My Order: {orders.length}</h2>
        </div>
    );
};

export default MyOrder;