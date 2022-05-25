import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useTools from '../../../hooks/useTools';

const ToolDetails = () => {
    const [tools] = useTools();
    let { id } = useParams();
    const [tool, setTool] = useState({});
    
    return (
        <div>
            <h2>ToolDetails: {tools.length}</h2>
        </div>
    );
};

export default ToolDetails;