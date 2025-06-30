import React from "react";
import { Link } from "react-router";
import img1 from "../../assets/PeopleImages/image1.jpg";
import img2 from "../../assets/PeopleImages/image2.jpg";
import img3 from "../../assets/PeopleImages/image3.jpg";
const NewServiceContainer = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 items-center bg-linear-to-r from-blue-900 to-blue-500 p-10 lg:p-20 rounded-2xl my-20">
        {/* section 1 */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug">
            Can’t Find the Service You’re Looking For?
          </h1>

          <div className="mt-4 border-l-4 border-yellow-400 pl-4">
            <p className=" text-lg text-gray-400">
              Add new service and share your experience with others!
            </p>
          </div>

          <Link
            to="/addservices"
            className="mt-6 inline-block rounded-2xl px-6 py-3 bg-yellow-400 text-slate-900 font-semibold  hover:bg-yellow-200"
          >
            + Add New Service
          </Link>
        </div>

        {/* section 2 */}
        <div className="lg:w-1/2 flex gap-5 justify-center items-center">
          <div className="-mt-14">
            <img
              src={img1}
              alt=""
              className="md:h-[250px] w-[150px] rounded-2xl"
            />
          </div>
          <div className="mt-14">
            <img
              src={img2}
              alt=""
              className="md:h-[250px] w-[150px] rounded-2xl"
            />
          </div>
          <div className="">
            <img
              src={img3}
              alt=""
              className="md:h-[250px] w-[150px] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewServiceContainer;
