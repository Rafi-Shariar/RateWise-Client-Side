import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import FeaturedServicesCardContainer from "../Components/FeaturedServices/FeaturedServicesCardContainer";
import lottieAnimation from "../assets/Lottie/loadingCards.json";
import Lottie from "lottie-react";
import FeaturedServiceCard from "../Components/FeaturedServices/FeaturedServiceCard";

const ServicesPage = () => {
  document.title = "Explore Service | Ratewise";
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);
  const [search,setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [reset,setRest] = useState(false)

  const handleResetSearch = () =>{
    setSearch('');
    setCategory('');
    setRest(true);

  }

  useEffect(() => {

    const queryParams = new URLSearchParams({
      searchParams:search,
      category: category,
    });

    fetch(`http://localhost:3000/allservices?${queryParams}`)
    .then( res => res.json())
    .then(result => {

      setData(result);
      setRest(false);
      setLoader(false);
    })

  }, [search,category,reset]);

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
      <div className="max-w-4xl mx-auto bg-slate-50 my-10 p-6 rounded-2xl shadow-md space-y-4">


  <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
    {/* Category search */}
    <div className="">
      <select
        name="category"
        required
        className="w-full px-4 py-2 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
        onChange={(e)=>setCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        <option value="Web Development">Web Development</option>
        <option value="Graphic Design">Graphic Design</option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Content Writing">Content Writing</option>
        <option value="Video Editing">Video Editing</option>
        <option value="Mobile App Development">Mobile App Development</option>
        <option value="SEO Services">SEO Services</option>
        <option value="UI/UX Design">UI/UX Design</option>
        <option value="Social Media Management">Social Media Management</option>
        <option value="Consulting & Strategy">Consulting & Strategy</option>
      </select>
    </div>

    {/* Search Box */}
    <div className="w-full md:w-1/2">
      <label className="flex items-center gap-2 px-4 py-2 border border-sky-200 rounded-lg focus-within:ring-2 focus-within:ring-sky-500">
        <svg
          className="h-5 w-5 text-sky-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="search"
          className="grow focus:outline-none bg-transparent"
          placeholder="Search by title"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </div>

    <div>
      <button onClick={handleResetSearch}  className="btn btn-outline btn-success">Reset</button>
    </div>
  </div>
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
