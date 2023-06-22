/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../pages/Shared/NavigationBar/NavigationBar';
import Footer from '../../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='px-4'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;