import React, { useEffect, useState } from "react";
import serviceImage from "../../assets/CountUpImages/public-service.png";
import UsersImage from "../../assets/CountUpImages/man.png";
import RatingImage from "../../assets/CountUpImages/rating.png";
import CountUp from "react-countup";
import { motion } from "motion/react"

const CountUpContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://ratewise-seven.vercel.app/counts")
      .then((res) => res.json())
      .then((counts) => {
        setData(counts);
      });
  }, []);





  return (
    <div>

        <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}>
                <h1 className='text-2xl font-semibold text-blue-900 lg:text-4xl mt-20'>Operational Summary</h1>
            <p className='font-extralight mt-3'>Tracking service activity, user engagement, and feedback.</p>
            </motion.div>


        {/* Matrices */}
        <div className="my-10 flex flex-col lg:flex-row justify-center gap-7 bg-slate-100 py-20 px-2 rounded-2xl">

        {/* Services */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-white via-green-50 to-green-200 shadow-lg p-8 rounded-2xl border border-green-300 min-w-[300px] shadow-gray-400">
        <img src={serviceImage} alt="Service Icon" className="w-16 mb-4" />

        <h1 className="text-4xl font-bold text-green-700">
          <CountUp end={data?.services} duration={4.75}/>+
        </h1>

        <h2 className="text-xl font-semibold mt-1 text-gray-800">
          Total Services
        </h2>

        <p className="text-sm text-gray-500 mt-2 text-center">
          Explore our available service packages
        </p>
      </div>

      {/* Users */}

      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-white via-orange-50 to-orange-200 shadow-lg p-8 rounded-2xl border border-orange-300 min-w-[300px] shadow-gray-400 ">
        <img src={UsersImage} alt="Service Icon" className="w-16 mb-4" />

        <h1 className="text-4xl font-bold text-orange-500">
          <CountUp end={data?.users} duration={4.75}/>+
        </h1>

        <h2 className="text-xl font-semibold mt-1 text-gray-800">
          Registered Users
        </h2>

        <p className="text-sm text-gray-500 mt-2 text-center">
          Meet our growing user community
        </p>
      </div>

      {/* Reviews */}

      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-white via-yellow-50 to-yellow-100 shadow-lg p-8 rounded-2xl border border-yellow-300 min-w-[300px] shadow-gray-400">
        <img src={RatingImage} alt="Service Icon" className="w-16 mb-4" />

        <h1 className="text-4xl font-bold text-yellow-600">
          <CountUp end={data?.reviews} duration={4.75} />+
        </h1>

        <h2 className="text-xl font-semibold mt-1 text-gray-800">
          Customer Reviews
        </h2>

        <p className="text-sm text-gray-500 mt-2 text-center">
            See what users are saying
        </p>
      </div>
    </div>
    </div>
  );
};

export default CountUpContainer;
