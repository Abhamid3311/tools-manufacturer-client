import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='w-1/2 mx-auto my-7 '>
            <h2 className='text-4xl text-semibold text-accent mb-9'>My Profile</h2>

            <div>
                <h2 className='text-2xl'> Name: {user?.displayName}</h2>
                <h3 className='text-2xl'>Email: {user?.email}</h3>
                <h4 className='text-2xl'>Education: BBA In Dhaka University</h4>
                <h4 className='text-2xl'>Location: Malibag</h4>
                <h4 className='text-2xl'>City: Dhaka </h4>
                <h4 className='text-2xl'>Phone: 01730XXXXXXX</h4>
            </div>
        </div>
    );
};

export default MyProfile;