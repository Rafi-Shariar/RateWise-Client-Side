import React from "react";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import lottieAnimation from "../../assets/Lottie/OutPartnersLottie.json";
import logo1 from "../../assets/MeetOutPartnersLogo/eye.png";
import logo2 from "../../assets/MeetOutPartnersLogo/league.png";
import logo3 from "../../assets/MeetOutPartnersLogo/logo (2).png";
import logo4 from "../../assets/MeetOutPartnersLogo/square.png";
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
        <p className="font-extralight my-3">
          Empowering our platform with trusted technologies and industry
          leaders.
        </p>
      </motion.div>

      {/* Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="mx-auto w-[60%] lg:w-[100%]">
              <Lottie animationData={lottieAnimation} loop={true} />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:w-1/2">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-t from-sky-100 via-white to-transparent p-7 rounded-2xl shadow-2xl">
            {/* Card 1 */}
            <div className="card bg-base-100 shadow-lg border border-blue-100">
              <figure className="px-10 pt-5">
                <img
                  src={logo1}
                  alt="SkyServe"
                  className="rounded-xl w-24 h-24"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">
                  SkyServe Technologies
                </h2>
                <p className="font-extralight text-xs">
                  Provides cloud infrastructure and API integration support,
                  helping us scale our services securely.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 shadow-lg border border-blue-100">
              <figure className="px-10 pt-5">
                <img
                  src={logo2}
                  alt="NovaReach"
                  className="rounded-xl w-24 h-24"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">NovaReach Media</h2>
                <p className="font-extralight text-xs">
                  Assists with digital outreach strategies and promotional
                  campaigns for featured services.Build with trust.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 shadow-lg border border-blue-100">
              <figure className="px-10 pt-5">
                <img
                  src={logo3}
                  alt="QuickPay"
                  className="rounded-xl w-24 h-24"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">QuickPay Systems</h2>
                <p className="font-extralight text-xs">
                  Offers a secure and seamless payment gateway solution for
                  handling future transactions.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card bg-base-100 shadow-lg border border-blue-100">
              <figure className="px-10 pt-5">
                <img
                  src={logo4}
                  alt="Insightix"
                  className="rounded-xl w-24 h-24"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">Insightix Analytics</h2>
                <p className="font-extralight text-xs">
                  Enables us to monitor user behavior and optimize the user
                  experience with smart analytics tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOutPartnersContainer;
