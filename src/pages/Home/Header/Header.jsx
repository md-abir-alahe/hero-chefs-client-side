/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/Sushi cook.gif'

const Header = () => {
    return (
        <div className='md:flex justify-around items-center mt-5 border-b-2 border-cyan-900'>
            <div className='flex flex-col items-center md:items-start md:w-1/2'>
                <h2 className='text-5xl font-semibold text-cyan-900'>Meet the best chefs <br />in the world.</h2>
                <p className='mt-7 text-xl w-3/4 ps-6 border-s-4 b border-cyan-900'>Where everything yupi touches transforms into something bright, happy, and sweet for as long as it takes to eat a delicious Sour Brite Crawler.</p>
                <div>
                    <Link className='mt-10 btn btn-outline border-2 hover:border-orange-500 border-orange-500 rounded-full text-orange-600 hover:bg-orange-500' to={`/allchefs`}>All Chefs</Link>
                </div>
            </div>
            <div>
                <img className='w-full' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Header;