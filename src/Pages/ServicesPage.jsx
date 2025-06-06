import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import FeaturedServicesCardContainer from "../Components/FeaturedServices/FeaturedServicesCardContainer";
import lottieAnimation from "../assets/Lottie/loadingCards.json";
import Lottie from "lottie-react";
import { useLoaderData } from "react-router";
import FeaturedServiceCard from "../Components/FeaturedServices/FeaturedServiceCard";

const ServicesPage = () => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);
  const servicesData = useLoaderData();

  useEffect(() => {
    setData(servicesData);
    setLoader(false);
  }, [servicesData]);

  return (
    <div className="p-2">
      {/* title */}
      <div className="mt-10">
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-2xl font-semibold text-blue-900 lg:text-4xl">
            Explore Our Services
          </h1>
          <p className="font-extralight text-xs lg:text-sm">
            Discover a wide range of services tailored to your needs. Browse
            through the listings to find exactly what you're looking for, all in
            one place.
          </p>
        </motion.div>
      </div>

      {/* Services Container */}
      <div className="mt-15">
        {loader ? (
          <>
            <div className=" flex justify-center items-center">
              <Lottie
                animationData={lottieAnimation}
                loop={true}
                className="w-[60%]"
              />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-7">
              {data?.map((featured) => (
                <FeaturedServiceCard key={featured._id} featured={featured} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
