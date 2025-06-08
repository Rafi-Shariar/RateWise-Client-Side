import React from 'react';
import { motion } from "motion/react";
import MySercvicesTableContainer from '../Components/MyServices/MySercvicesTableContainer';

const MyServicesPage = () => {
    return (
        <div>
            
            {/* titile */}
             <motion.div
                    initial={{ x: -400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='p-2'
                  >
                    <h1 className="text-2xl font-semibold text-blue-900 lg:text-4xl mt-10 mb-3">
              My Services
            </h1>
            <p className="font-extralight text-xs lg:text-sm">
Manage and view all the services you've added. Keep track, update details, and showcase what you offer with ease.            </p>
            
            </motion.div>

            {/* content */}
            <div className='p-2'>
                <MySercvicesTableContainer></MySercvicesTableContainer>
            </div>
        </div>
    );
};

export default MyServicesPage;