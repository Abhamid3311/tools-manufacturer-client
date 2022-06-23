import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import UserRow from './UserRow';

const Users = () => {

    //Used React Query For Load All Users
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(' https://lit-retreat-00129.herokuapp.com/user/', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <p>Loading....</p>
    }




    return (
        <div>
            <h2 className='text-4xl text-semibold text-accent mb-9'>Users: {users.length}</h2>

            <table class="table w-full">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Make Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <UserRow
                            key={user._id}
                            user={user}
                            refetch={refetch}
                        ></UserRow>)
                    }
                </tbody>
            </table>
            <div class="overflow-x-auto">

            </div>
        </div>
    );
};

export default Users;