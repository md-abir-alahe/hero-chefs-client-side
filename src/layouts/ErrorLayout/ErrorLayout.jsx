/* eslint-disable no-unused-vars */
import React from 'react';
import NavigationBar from '../../pages/Shared/NavigationBar/NavigationBar';
import Footer from '../../pages/Shared/Footer/Footer';
import Error from '../../pages/Error/Error';

const ErrorLayout = () => {
    return (
        <div className='px-4'>
            <NavigationBar></NavigationBar>
            <Error></Error>
            <Footer></Footer>
        </div>
    );
};

export default ErrorLayout;