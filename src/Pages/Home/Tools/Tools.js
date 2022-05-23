import React, { useEffect, useState } from 'react';
import useTools from '../../../hooks/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useTools();

    return (
        <div>
            <h2 className='text-accent text-4xl text-center font-bold my-5'>Featured Tools</h2>

            <div className='grid grid-cols-3 gap-4'>
                {
                    tools.map(tool => <Tool
                        key={tool.id}
                        tool={tool}
                    ></Tool>).slice(0, 6)
                }

            </div>

        </div>
    );
};

export default Tools;