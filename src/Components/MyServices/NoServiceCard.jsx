import Lottie from 'lottie-react';
import React from 'react';
import lottieAni from '../../assets/Lottie/noData.json';
import { Link } from 'react-router';
const NoServiceCard = () => {
    return (
        <div className='max-w-4xl mx-auto flex flex-col justify-center items-center'>
           <div lassName='w-[50%]'>
             <Lottie animationData={lottieAni} loop={true}></Lottie>
           </div>

           <div className='flex flex-col justify-center items-center gap-10'>
            <h1 className='text-2xl font-semibold mt-10 text-blue-600'>You Have No Services till now !</h1>
            <Link to={'/addservices'} className='btn '>Add Your Service</Link>
           </div>
        </div>
    );
};

export default NoServiceCard;