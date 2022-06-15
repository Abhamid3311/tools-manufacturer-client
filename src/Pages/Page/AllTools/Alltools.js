import React from 'react';
import useTools from '../../../hooks/useTools';
import { useNavigate } from 'react-router-dom';
import Tool from '../../Home/Tools/Tool';

const Alltools = () => {
    const [tools] = useTools();
    const navigate = useNavigate();
    const handleBuyNow = id => {
        navigate(`/tools/${id}`);
    };
    return (
        <div>
            <section>
                <h2 className='text-accent text-4xl text-center font-bold my-10'>Our Inventory</h2>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {
                        tools.map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                            handleBuyNow={handleBuyNow}
                        ></Tool>)
                    }

                </div>

            </section>

        </div>
    );
};

export default Alltools;