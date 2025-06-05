import React from "react";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import lottieAnimation from "../assets/Lottie/Login.json";
import RegistrationForm from "../Components/Forms/RegistrationForm";
import LoginForm from "../Components/Forms/LoginForm";
const LoginPage = () => {
  return (
    <div className="mt-20 p-5">
      {/* title */}
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-semibold text-blue-900 lg:text-4xl">
  Welcome Back
</h1>
<p className="font-extralight text-xs lg:text-sm">
  Log in to access your account, manage your preferences, and continue where you left off. We're glad to have you back!
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
          <LoginForm></LoginForm>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
