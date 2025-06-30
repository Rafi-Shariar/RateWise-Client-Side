import React from "react";
import { motion } from "motion/react";
import { FaReact, FaCss3Alt, FaUserShield } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiAxios } from "react-icons/si";
import { MdRateReview, MdDesignServices } from "react-icons/md";

const AboutUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <motion.h1
        className="text-4xl font-bold text-center text-sky-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About RateWise
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        RateWise is a user-driven platform where you can explore, review, and
        contribute to service listings from real users. We aim to make
        discovering reliable services easier through authentic feedback and a
        clean, responsive experience.
      </motion.p>

      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-white rounded-2xl shadow-md p-6 text-center"
         
        >
          <h2 className="text-2xl font-semibold text-sky-600 mb-4 flex justify-center items-center gap-2">
            <MdDesignServices className="text-3xl" /> What We Offer
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2 inline-block text-left">
            <li>Browse and add service listings with ratings</li>
            <li>View and share real user experiences</li>
            <li>Secure login and registration via Firebase</li>
            <li>Fully responsive and clean user interface</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 text-center"
        
      >
        <h3 className="text-xl font-medium text-gray-800 mb-2">
          Join the RateWise community!
        </h3>
        <p className="text-gray-600">
          Explore services, share your experience, and help others make informed
          decisions.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
