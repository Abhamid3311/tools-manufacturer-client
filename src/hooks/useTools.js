const { useState, useEffect } = require("react");

const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://lit-retreat-00129.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);
    return [tools, setTools];
};
export default useTools;