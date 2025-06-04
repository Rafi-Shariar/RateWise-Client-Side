import React from 'react';
import BannerSection from '../Components/Banner/BannerSection';
import FeaturedContainer from '../Components/Featured/FeaturedContainer';

const HomePage = () => {

    
    return (
        <div className='p-2'>
            <BannerSection></BannerSection>
            <FeaturedContainer></FeaturedContainer>
        </div>
    );
};

export default HomePage;