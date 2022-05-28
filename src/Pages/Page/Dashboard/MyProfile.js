import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [users, setUsers] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const userInfo = {
            userName: user?.displayName,
            userEmail: user?.email,
            education: data.education,
            city: data.city,
            phone: data.phone
        };


        //send to server
        const url = 'https://lit-retreat-00129.herokuapp.com/user';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const newUser = [...users, result];
                setUsers(newUser);
            })
    };

    return (
        <div className='w-1/2 mx-auto my-7 '>
            <h2 className='text-4xl text-semibold text-accent mb-9'>My Profile</h2>
            <div>
                <h2 className='text-2xl'> Name: {user?.displayName}</h2>
                <h3 className='text-2xl'>Email: {user?.email}</h3>
                <h4 className='text-2xl'>Education: BBA In Dhaka University</h4>
                <h4 className='text-2xl'>City: Dhaka </h4>
                <h4 className='text-2xl'>Phone: 01730XXXXXXX</h4>
            </div>


            <h2 className='text-3xl text-semibold text-accent my-9'>Update Information</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 mb-8">
                <input {...register("education")} placeholder="education" class="input input-bordered input-primary w-full max-w-md mb-4" />
                <input {...register("city")} placeholder="city" class="input input-bordered input-primary w-full max-w-md mb-4" />
                <input {...register("phone")} placeholder="phone" class="input input-bordered input-primary w-full max-w-md mb-4" />
                <input type="submit" value="Update" className='btn btn-accent' />
            </form>













        </div>
    );
};

export default MyProfile;