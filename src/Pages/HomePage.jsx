import React from 'react';
import BannerSection from '../Components/Banner/BannerSection';
import FeaturedServicesContainer from '../Components/FeaturedServices/FeaturedServicesContainer';
import MeetOutPartnersContainer from '../Components/MeetOurPartners/MeetOutPartnersContainer';
import CountUpContainer from '../Components/CountUps/CountUpContainer';

const HomePage = () => {


    
    return (
        <div className='p-2'>
            <BannerSection></BannerSection>
            <FeaturedServicesContainer></FeaturedServicesContainer>
            <MeetOutPartnersContainer></MeetOutPartnersContainer>
            <CountUpContainer></CountUpContainer>
        </div>
    );
};

export default HomePage;