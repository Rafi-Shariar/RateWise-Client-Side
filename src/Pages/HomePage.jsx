import React from 'react';
import BannerSection from '../Components/Banner/BannerSection';
import FeaturedServicesContainer from '../Components/FeaturedServices/FeaturedServicesContainer';

const HomePage = () => {

    
    return (
        <div className='p-2'>
            <BannerSection></BannerSection>
            <FeaturedServicesContainer></FeaturedServicesContainer>
        </div>
    );
};

export default HomePage;