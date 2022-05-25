import React from 'react';

const Business = () => {
    return (
        <section className='text-center my-12'>
            <h2 className='text-accent text-4xl text-center font-bold my-12'>Our Business Graph</h2>
            <div class=" shadow-lg  m-8 text-3xl grid grid-cols-1 lg:grid-cols-3">
                <div class="stat place-items-center mr-5 ">
                    <div class="stat-title">Sales</div>
                    <div class="stat-value text-accent">331K</div>
                    <div class="stat-desc">From January 1st to May 1st</div>
                </div>

                <div class="stat place-items-center mr-5">
                    <div class="stat-title">New Customers</div>
                    <div class="stat-value text-secondary">4,200</div>
                    <div class="stat-desc ">↗︎ 40 (2%)</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value text-red-500">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </section>
    );
};

export default Business;