import React from 'react';

const Business = () => {
    return (
        <div className='text-center my-12'>
            <h2 className='text-accent text-4xl text-center font-bold my-12'>Our Business Graph</h2>
            <div class="stats shadow-lg m-12 text-3xl">
                <div class="stat place-items-center mr-5">
                    <div class="stat-title">New Sales</div>
                    <div class="stat-value">331K</div>
                    <div class="stat-desc">From January 1st to May 1st</div>
                </div>

                <div class="stat place-items-center mr-5">
                    <div class="stat-title">New Users</div>
                    <div class="stat-value text-secondary">4,200</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Business;