import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import FeaturedServicesCardContainer from "../Components/FeaturedServices/FeaturedServicesCardContainer";
import lottieAnimation from "../assets/Lottie/loadingCards.json";
import Lottie from "lottie-react";
import { useLoaderData } from "react-router";
import FeaturedServiceCard from "../Components/FeaturedServices/FeaturedServiceCard";

const ServicesPage = () => {
  document.title = "Explore Service | Ratewise";
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);
  const [search,setSearch] = useState("");

  useEffect(() => {

    fetch(`http://localhost:3000/allservices?searchParams=${search}`)
    .then( res => res.json())
    .then(result => {

      setData(result);
      setLoader(false);
    })

  }, [search]);

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

      {/* Search and filter */}
      <div className="max-w-4xl mx-auto flex justify-center my-10">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search By Title" onChange={(e)=> setSearch(e.target.value)}/>
        </label>
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
