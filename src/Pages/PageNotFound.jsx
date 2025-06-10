import React from 'react';
import errorImg from '../assets/error-404.png';
import { Link } from 'react-router';
import { FaLongArrowAltLeft } from "react-icons/fa";
const PageNotFound = () => {
    return (
        <div>

            <div className='max-w-4xl min-h-screen mx-auto flex justify-center items-center flex-col'>
                <div>
                    <img src={errorImg} alt="" />
                    <h1 className='text-2xl font-semibold text-sky-700 text-center'>Opps! Page Not Found</h1>
                </div>

                <Link to={'/'} className='btn btn-soft btn-success mt-10'><FaLongArrowAltLeft />Home</Link>

            </div>
            
        </div>
    );
};

export default PageNotFound;