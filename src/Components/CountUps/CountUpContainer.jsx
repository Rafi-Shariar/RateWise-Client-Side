import React, { useEffect, useState } from "react";
import serviceImage from "../../assets/CountUpImages/public-service.png";
import UsersImage from "../../assets/CountUpImages/public-service.png";
import RatingImage from "../../assets/CountUpImages/rating.png";
import CountUp from "react-countup";
const CountUpContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/counts")
      .then((res) => res.json())
      .then((counts) => {
        setData(counts);
      });
  }, []);
  return (
    <div className="my-10 flex flex-col md:flex-row justify-center gap-7">

        {/* Services */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-white via-green-50 to-green-200 shadow-lg p-8 rounded-2xl border border-green-300">
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

      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-white via-orange-50 to-orange-200 shadow-lg p-8 rounded-2xl border border-orange-300 ">
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

      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-white via-yellow-50 to-yellow-100 shadow-lg p-8 rounded-2xl border border-yellow-300">
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
  );
};

export default CountUpContainer;
