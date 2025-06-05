import React from "react";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import lottieAnimation from "../../assets/Lottie/OutPartnersLottie.json";
const MeetOutPartnersContainer = () => {
  return (
    <div className="mt-20">
      {/* titile */}
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-semibold text-blue-900 lg:text-4xl">
          Meet Our Partners
        </h1>
        <p className="font-extralight">
          Empowering our platform with trusted technologies and industry
          leaders.
        </p>
      </motion.div>

      {/* Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-1/2">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="mx-auto">
              <Lottie animationData={lottieAnimation} loop={true} />
            </div>
          </div>
        </div>

        <div className="w-1/2 grid grid-cols-1 md:grid-cols-2">

            
        
        </div>
      </div>
    </div>
  );
};

export default MeetOutPartnersContainer;
