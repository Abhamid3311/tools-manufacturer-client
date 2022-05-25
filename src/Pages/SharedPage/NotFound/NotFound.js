import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const goToHomepage = () => {
        navigate('/');
    }
    return (
        <div className='flex align-center justify-center my-20'>
            <div>
                <h1 className='text-red-600 text-9xl font-bold m-5'>Oops!</h1>
                <h4 className='text-primary text-5xl my-4'>404- Page Not Found</h4>
                <p className='text-2xl my-5'>The Page you are looking for might have been removed or temporary unavailable</p>
                <button onClick={goToHomepage} className='btn btn-success btn-lg'>Go HomePage</button>
            </div>
        </div>
    );
};

export default NotFound;