import React from "react";
import bannerimg from '../../assets/BannerImages/banner1.jpg';
import { motion } from "motion/react"
const Banner1 = () => {
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

        <div className="text-white flex items-center justify-start w-full px-10">
          <motion.div className="max-w-xl"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="mb-5 text-5xl font-bold">Find Services You Can Rely On</h1>
            <p className="mb-5">
              Explore a wide range of trusted services reviewed by real users. Your next go-to solution is just a click away.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
