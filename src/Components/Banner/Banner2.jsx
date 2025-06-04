import React from 'react';
import bannerimg from '../../assets/BannerImages/banner2.jpg'
import { motion } from "motion/react"
const Banner2 = () => {
   return (
       <div>
         <div
           className="hero min-h-[70vh] mt-5 opacity-90"
           style={{
             backgroundImage: `url(${bannerimg})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}
         >
           <div className="hero-overlay bg-opacity-60"></div>
   
           <div className="text-white flex items-center justify-center w-full px-10">
             <motion.div className="max-w-xl text-center"
             initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}>
               <h1 className="mb-5 text-5xl font-bold">Your Voice Matters</h1>
               <p className="mb-5">
                 Rate and review the services you use. Help others make better choices and build a reliable community.
               </p>
             </motion.div>
           </div>
         </div>
       </div>
     );
};

export default Banner2;