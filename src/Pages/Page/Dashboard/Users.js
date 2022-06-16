import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://lit-retreat-00129.herokuapp.com/user/')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div>
            <h2 className='text-4xl text-semibold text-accent mb-9'>Users: {users.length}</h2>

            <table class="table w-full">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Delete</th>
                    </tr>
                </thead>


                {
                    users.map(user => <tbody>
                        <tr>
                            <th>{user.userName}</th>
                            <th>{user.userEmail}</th>
                            <th>{user.phone}</th>

                            <th><button className='btn btn-ghost text-2xl text-red-500'>
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

export default Users;