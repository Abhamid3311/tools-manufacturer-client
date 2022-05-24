import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Fetured from './Fetured';
import Reviews from './Reviews';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Business></Business>
            <Reviews></Reviews>
            <Fetured></Fetured>
        </div>
    );
};

export default Home;