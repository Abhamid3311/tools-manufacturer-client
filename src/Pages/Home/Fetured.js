import React from 'react';
import bgEx from '../../imges/banner-1.jpg';

const Fetured = () => {
    return (
        <section className='my-8' style={{
            background: `url(${bgEx})`
        }}>
            <div class="hero min-h-screen" >
                <div class="hero-overlay bg-opacity-30"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class=" mb-52">
                        <h2 class="mb-5 text-5xl text-primary font-bold">You love badass cars. So do we. Let's nerd out over them together.</h2>

                        <p class="mb-5  ">The Best Car Tools You Need to Keep Up With Vehicle Maintenance. These cost-saving essentials will come in handy for years to come. Whether you're fixing an old car or you have a brand new model, with the right car tools, you can skip the auto shop and start doing your own car maintenance.</p>
                        <button class="btn btn-accent btn-lg">Let's Explorer</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fetured;