import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewContainer = ({reviews,companyInfo}) => {
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
                reviews.map(review => <ReviewCard review={review} companyInfo={companyInfo}></ReviewCard>)
            }

            
        </div>
    );
};

export default ReviewContainer;