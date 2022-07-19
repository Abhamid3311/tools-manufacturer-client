import React from 'react';
import bgEx from '../../imges/banner-1.jpg';
import bgEx2 from '../../imges/range.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Fetured = () => {
    const navigate = useNavigate();
    const handleExplorer = () => {
        navigate('/alltools')
    }
    return (
        <section className='my-8 featured-container' >
            <div class="hero min-h-screen" >
                <div class="hero-overlay bg-opacity-30"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class=" mb-52">
                        <h2 class="mb-5 text-5xl text-primary font-bold">Let's  make your car new again with our awesome tools!</h2>

                        <p class="mb-5  w-2/3 mx-auto">The Best Car Tools You Need to Keep Up With Vehicle Maintenance. These cost-saving essentials will come in handy for years to come. Whether you're fixing an old car or you have a brand new model, with the right car tools. </p>
                        <button onClick={handleExplorer} class="btn btn-accent  text-lg">
                            <span className='mr-1'>Let's Explore</span> <AiOutlineArrowRight></AiOutlineArrowRight>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fetured;