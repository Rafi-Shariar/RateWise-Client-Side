import React from 'react';
import BannerSection from '../Components/Banner/BannerSection';
import FeaturedServicesContainer from '../Components/FeaturedServices/FeaturedServicesContainer';
import MeetOutPartnersContainer from '../Components/MeetOurPartners/MeetOutPartnersContainer';
import CountUpContainer from '../Components/CountUps/CountUpContainer';
import RecentReviewsContainer from '../Components/RecentReviews/RecentReviewsContainer';

const HomePage = () => {


    
    return (
        <div className='p-2'>
            <BannerSection></BannerSection>
            <FeaturedServicesContainer></FeaturedServicesContainer>
            <MeetOutPartnersContainer></MeetOutPartnersContainer>
            <CountUpContainer></CountUpContainer>
            <RecentReviewsContainer></RecentReviewsContainer>
        </div>
    );
};

export default HomePage;