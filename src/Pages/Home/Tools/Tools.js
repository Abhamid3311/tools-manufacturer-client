import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../../../hooks/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools] = useTools();
    const navigate = useNavigate();
    const handleBuyNow = id => {
        navigate(`/tools/${id}`);
    };

    return (
        <section>
            <h2 className='text-accent text-4xl text-center font-bold my-10'>Featured Tools</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                        handleBuyNow={handleBuyNow}
                    ></Tool>).slice(0, 6)
                }

            </div>

        </section>
    );
};

export default Tools;