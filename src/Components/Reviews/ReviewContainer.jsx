import React from 'react';
import ReviewCard from './ReviewCard';
import { PiMouseScrollFill } from "react-icons/pi";
const ReviewContainer = ({reviews,companyInfo}) => {
    
    return (
      <div className='border border-sky-900 rounded-2xl shadow-2xl overflow-hidden'>
         <div className="max-h-[600px] overflow-y-auto p-5 bg-gradient-to-t from-sky-100 via-white to-transparent">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
    {
      reviews.map(review => (
        <ReviewCard key={review._id} review={review} companyInfo={companyInfo} />
      ))
    }
  </div>

  <div>
  </div>
       </div>

       <div className='bg-sky-900'>
        <p className='text-center py-5 text-yellow-500'><PiMouseScrollFill className='inline text-2xl'/>Scroll inside to Explore More Reviews</p>
       </div>
      </div>

    );
};

export default ReviewContainer;