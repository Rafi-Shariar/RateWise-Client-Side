import React from 'react';
import FeaturedServicesCardContainer from './FeaturedServicesCardContainer';
import { motion } from "motion/react"

const FeaturedServicesContainer = () => {
    return (
        <div className='mt-20'>
            {/* Title */}
            <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}>
                <h1 className='text-2xl font-semibold text-blue-900 lg:text-4xl'>Featured Services</h1>
            <p className='font-extralight my-3'>Explore top-rated services, handpicked to deliver the best value and quality. Trusted by users, built to serve.</p>
            </motion.div>

            {/* Card-Container */}
            <div className='mt-4'>
                <FeaturedServicesCardContainer></FeaturedServicesCardContainer>
            </div>
        </div>
    );
};

export default FeaturedServicesContainer;