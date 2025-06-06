import React from 'react';
import BannerSection from '../Components/Banner/BannerSection';
import FeaturedServicesContainer from '../Components/FeaturedServices/FeaturedServicesContainer';
import MeetOutPartnersContainer from '../Components/MeetOurPartners/MeetOutPartnersContainer';

const HomePage = () => {


    
    return (
        <div className='p-2'>
            <BannerSection></BannerSection>
            <FeaturedServicesContainer></FeaturedServicesContainer>
            <MeetOutPartnersContainer></MeetOutPartnersContainer>
        </div>
    );
};

export default HomePage;