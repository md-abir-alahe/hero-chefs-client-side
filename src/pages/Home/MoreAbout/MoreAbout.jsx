/* eslint-disable no-unused-vars */
import React from 'react';
import recipeBook from '../../../assets/Recipe book.gif'

const MoreAbout = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-around my-9'>
            <div className='w-full md:w-1/2'>
                <img className='w-full' src={recipeBook} alt="" />
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-4'>
                <h2 className='text-4xl font-bold'>Get to know more <br></br>about <span className='font-extrabold'>hero<span className='text-orange-600'>Chef</span></span></h2>
                <p className='text-cyan-950 font-semibold border-e-4 border-cyan-900 pe-8 me-8'>Unlock the full potential of your kitchen with HeroChef! Our website is packed with thousands of recipes and cooking tips from top chefs around the world. Whether you’re a beginner or an experienced cook, our easy-to-use search tool and step-by-step instructions will help you find the perfect dish for any occasion. Plus, get personalized recommendations and helpful cooking tips tailored just for you. Get ready to become a master chef with HeroChef!</p>
                <div>
                    <ul className='list-image-checkmark list-inside text-lg font-bold text-orange-700'>
                        <li>Discover the chef in you with heroChef! Get access to thousands of delicious recipes from professional chefs around the world.</li>
                        <li>Create your own personal cookbook and find new flavors to explore.</li>
                        <li>Get step-by-step instructions and video tutorials to help you make amazing meals with ease.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MoreAbout;