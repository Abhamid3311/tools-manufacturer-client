import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='text-5xl text-center text-accent font-bold my-10'>My Portfolio</h2>

            <div className='w-1/2 mx-auto'>
                <h2 className='text-2xl mb-3'>Name: Md Abdul Hamid</h2>
                <h3 className='text-xl mb-3'>Email: www.abdulhamid3311@gmail.com</h3>
                <h3 className='text-2xl mb-4 text-accent'>Educations:</h3>
                <div className='text-secondary text-xl'>
                    <h2>National University</h2>
                    <h3>Subject: Chemisty</h3>
                    <h3>Third Year Running</h3>
                </div>
                <div>
                    <h3 className='text-2xl mb-4 text-accent'>List Of Technology I Know: </h3>
                    <ol>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript</li>
                        <li>ES6</li>
                        <li>React</li>
                        <li>Firebase</li>
                        <li>Node(Express.js)</li>
                        <li>MongoDB</li>
                    </ol>
                </div>
                <div>
                    <h3 className='text-2xl my-4 text-accent'>My Best Three Website:</h3>
                    <ul>
                        <li className='text-secondary text-xl'><a href="https://abhamid3311.github.io/Khulna-travels/" target="_blank" rel="noreferrer">Khulna Tours</a></li>

                        <li className='text-secondary text-xl'><a href="https://abhamid3311.github.io/Barbor-Shop/" target="_blank" rel="noreferrer">Barbor Shop</a></li>

                        <li className='text-secondary text-xl'><a href="https://abhamid3311.github.io/College-Website-/" target="_blank" rel="noreferrer">College Website</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;