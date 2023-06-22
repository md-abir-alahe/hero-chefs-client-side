/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Header/Header';
import Chefs from './Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import MoreAbout from './MoreAbout/MoreAbout';
import Bottom from './Bottom/Bottom';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Chefs
                key={chefs._id}
                chefs={chefs}
            ></Chefs>
            <MoreAbout></MoreAbout>
            <Bottom></Bottom>
        </div>
    );
};

export default Home;