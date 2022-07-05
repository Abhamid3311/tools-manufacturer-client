import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate();
    const handleExplorer = () => {
        navigate('/alltools')
    }


    return (
        <div class="hero min-h-screen hero-overlay banner-bg"  >

            <div class="hero-content text-center text-neutral-content">
                <div class=" mb-5">
                    <h2 class="mb-5 text-4xl font-bold text-accent">WELCOME TO KHULNA TOOLS</h2>
                    <p class="mb-5 text-white text-md max-w-lg">If you work on your own vehicles, do yourself a favor and check out these cool tools. It's a collection that should be in every serious mechanic's tool chest.</p>
                    <button onClick={handleExplorer} class="btn btn-accent  text-lg">
                        <span className='mr-1'>Let's Explore</span> <AiOutlineArrowRight></AiOutlineArrowRight>
                    </button>
                </div>
            </div>

        </div>



    );
};

export default Banner;