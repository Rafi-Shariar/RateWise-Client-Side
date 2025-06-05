import React from "react";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import lottieAnimation from "../assets/Lottie/Registration.json";
import RegistrationForm from "../Components/RegistrationForm";
const RegistrationPage = () => {
  return (
    <div className="mt-20 p-5">
      {/* title */}
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-semibold text-blue-900 lg:text-4xl">
          Create Your Account
        </h1>
        <p className="font-extralight text-xs lg:text-sm">
          Join our community to explore services, share your experiences, and
          connect with trusted providers. Signing up takes less than a minute!
        </p>
      </motion.div>

      {/* Container */}
      <section className="flex flex-col lg:flex-row gap-10 items-center justify-around">
        {/* Animation */}
        <div className="lg:w-1/2">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="mx-auto">
              <Lottie animationData={lottieAnimation} loop={true} />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2">
          <RegistrationForm></RegistrationForm>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
