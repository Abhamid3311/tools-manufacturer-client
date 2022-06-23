import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { userName, email, phone, role } = user;


    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed To Make admin');
                }
                return res.json();
            })
            .then(data => {
                refetch();
                toast.success('Successfully made and admin');
            })
    }
    return (
        <tr>
            <th>{userName}</th>
            <th>{email}</th>
            <th>{phone}</th>

            <th>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-accent btn-sm'>Admin</button>}</th>

            <th><button className='btn btn-ghost text-2xl text-red-500'>
                <AiFillDelete></AiFillDelete>
            </button></th>
        </tr>
    );
};

export default UserRow;