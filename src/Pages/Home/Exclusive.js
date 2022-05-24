import React from 'react';
import carTools from '../../imges/Best-Automotive-Tools-for-Cars.jpg';

const Exclusive = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-secondary">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={carTools} className='w-2/4 ' alt='' />
                    <div>
                        <h1 class="text-5xl font-bold text-accent">Hot News About Us!</h1>
                        <p class="py-6">If you work on your own vehicles, do yourself a favor and check out these cool tools. It's a collection that should be in every serious mechanic's tool chest.</p>
                        <button class="btn btn-accent btn-lg">Learn more</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Exclusive;