/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ChefCard from '../../../components/ChefCard/ChefCard';

const Chefs = ({ chefs }) => {

    return (
        <div>
            <h2 className='text-4xl text-center mt-16 mb-14 font-extrabold text-cyan-900'>Pro Chefs</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef._id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;