import React from 'react';
import FeaturedServicesCardContainer from './FeaturedServicesCardContainer';

const FeaturedServicesContainer = () => {
    return (
        <div className='mt-10'>
            {/* Title */}
            <div>
                <h1 className='text-2xl font-semibold text-blue-900 lg:text-4xl'>Featured Services</h1>
            <p className='font-extralight'>Explore top-rated services, handpicked to deliver the best value and quality. Trusted by users, built to serve.</p>
            </div>

            {/* Card-Container */}
            <div className='mt-4'>
                <FeaturedServicesCardContainer></FeaturedServicesCardContainer>
            </div>
        </div>
    );
};

export default FeaturedServicesContainer;