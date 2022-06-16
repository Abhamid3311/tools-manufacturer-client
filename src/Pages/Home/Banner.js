import React from 'react';
import banner from '../../imges/plus.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    const handleExplorer = () => {
        navigate('/alltools')
    }


    return (
        <div class="hero min-h-screen bg-fixed bg-center hero-overlay bg-opacity-50" style={{
            background: `url(${banner})`
        }} >

            <div class="hero-content text-center text-neutral-content">
                <div class=" mb-5">
                    <h2 class="mb-5 text-4xl font-bold text-accent">WELCOME TO KHULNA TOOLS</h2>
                    <p class="mb-5 text-black text-lg max-w-lg">If you work on your own vehicles, do yourself a favor and check out these cool tools. It's a collection that should be in every serious mechanic's tool chest.</p>
                    <button onClick={handleExplorer} class="btn btn-accent  text-lg">
                        <span className='mr-1'>Let's Explore</span> <AiOutlineArrowRight></AiOutlineArrowRight>
                    </button>
                </div>
            </div>

        </div>



    );
};

export default Banner;