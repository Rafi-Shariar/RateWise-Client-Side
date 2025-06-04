import React from "react";
import bannerImg from "../../assets/BannerImages/banner3.jpg";
import { motion } from "motion/react"
const Banner3 = () => {
  return (
    <div>
      <div
        className="hero min-h-[70vh] mt-5 opacity-90"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="text-white flex items-center justify-start w-full px-10">
          <motion.div className="max-w-xl"
          initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            <h1 className="mb-5 text-5xl font-bold">
              Add & Manage Your Services
            </h1>
            <p className="mb-5">
              Add your own services, manage reviews, and improve through honest
              feedback from real users.{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
