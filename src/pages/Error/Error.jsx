/* eslint-disable no-unused-vars */
import React from 'react';
import errorImg from '../../assets/404 error with a landscape.gif'

const Error = () => {
    return (
        <div className='p-7  flex flex-col justify-center items-center'>
            <img className='mx-auto my-auto w-max' src={errorImg} alt="" />
            <p className='mb-5 text-center font-semibold text-orange-700 text-4xl'>OPPS!! Something is going Wrong</p>
        </div>
    );
};

export default Error;