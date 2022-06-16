import React from 'react';
import useTools from '../../../hooks/useTools';
import { AiFillDelete } from 'react-icons/ai';

const ManageTools = () => {
    const [tools] = useTools();
    return (
        <div>
            <h2 className='text-2xl mb-3'>Manage Tools: {tools.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Available</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{tool.name}</td>
                                <td>{tool.model}</td>
                                <td>{tool.price}</td>
                                <td>{tool.quantity}</td>
                                <th><button className='btn btn-ghost text-2xl text-red-500'>
                                    <AiFillDelete></AiFillDelete>
                                </button></th>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTools;