import React from 'react';

const Business = () => {
    return (
        <section className='text-center my-12 '>
            <h2 className='text-accent text-4xl text-center font-bold my-12'>Our Business Summery</h2>
            <div class="  grid grid-cols-2 lg:grid-cols-4">

                <div class="stat place-items-center  border-2 shadow-lg">
                    <div class="stat-figure text-accent ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div class="stat-title">Sales</div>
                    <div class="stat-value text-accent">331K</div>
                    <div class="stat-desc">From January 1st to May 1st</div>
                </div>

                <div class="stat place-items-center  border-2 shadow-lg">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value text-primary">4,200</div>
                    <div class="stat-desc ">↗︎ 40 (2%)</div>
                </div>

                <div class="stat place-items-center py-8  border-2 shadow-lg">
                    <div class="stat-figure text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-title">Satisfied Customers</div>
                    <div class="stat-value text-green-500">3,200</div>
                    <div class="stat-desc">↗︎ 120 (34%)</div>
                </div>

                <div class="stat place-items-center  border-2 shadow-lg">
                    <div class="stat-figure text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value text-red-500">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </section>
    );
};

export default Business;