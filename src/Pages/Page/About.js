import React from 'react';

const About = () => {
    return (
        <section className='px-10'>
            <div>
                <h1 className='text-accent text-5xl text-center font-bold my-12'>About Us</h1>
                <p className='text-lg'>Being a comprehensive service platform for foreign trade, Khulna tools is committed to tapping business opportunities for Bengali suppliers and overseas buyers, and providing one-stop services for promoting the international trade between the two sides. Over the past few years, Khulna Tools has become one of the most extensive and reliable web addresses for international trade.</p>
                <p>Made-in-China.com currently has more than 40 million pieces of product information from 27 industries. Besides, based on different procurement demands from different buyers, Made-in-China.com also provides various methods as follows for global buyers to source products.</p>
            </div>


            <div className='mt-16'>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://www.floridacareercollege.edu/wp-content/uploads/sites/4/2020/06/3-Reasons-Why-Being-a-Mechanic-Could-Be-An-Amazing-Career-Florida-Career-College.jpeg" alt="Movie" /></figure>

                    <div class="card-body w-fit">
                        <h2 class="card-title text-3xl text-accent">Trustworthy Bengali Suppliers</h2>
                        <p>In order to reduce trade risks for global buyers, all premium suppliers on Khulna Tools are verified on-site by SGS, Bureau Veritas or TÜV Rheinland, world's leading inspection companies. Global buyers can access to suppliers' Audit Reports online for free to check their authentic information.</p>
                    </div>
                </div>
            </div>

            <div className='mt-16'>
                <div class="card lg:card-side bg-base-100 shadow-xl">


                    <div class="card-body w-fit">
                        <h2 class="card-title text-3xl text-accent">Trade Easily and Safely</h2>
                        <p>We are designed to facilitate registered members to place, accept, conclude, manage and fulfill orders for the provision of products and services online.</p>
                    </div>

                    <figure><img src="https://ascendextrader.com/images/bitmax/1629940905605/original/how-to-trade-stablecoins-safely-on-ascendex.jpg" alt="Movie" /></figure>
                </div>
            </div>
        </section>
    );
};

export default About;