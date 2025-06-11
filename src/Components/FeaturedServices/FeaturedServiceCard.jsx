import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "motion/react";
import { BiSolidCategory } from "react-icons/bi";
import { PiBuildingOfficeFill } from "react-icons/pi";
const FeaturedServiceCard = ({ featured }) => {
  const { _id, image, title, description, price,category,companyName } = featured;

  return (
    <motion.div className="shadow-lg p-5 min-h-[200px] rounded-xl hover:bg-sky-50"
    whileHover={{ scale: 1.1 }}
            
            >
      <div className="flex gap-5 items-center">
        <figure className="">
          <img src={image} alt={title} className=" w-10" />
        </figure>
        <div>
          <h2 className=" text-xl">{title}</h2>
          <h2 className=" text-base text-gray-500 flex items-center gap-2"><PiBuildingOfficeFill/>{companyName}</h2>
        </div>
      </div>

      <div className="">
        <p className="text-sm text-gray-600 mt-5 font-light">
          {description.slice(0, 100)}...
        </p>

      
      </div>

      <div className="flex justify-between items-center mt-5">
          <span className="btn bg-base-300 border-0 text-green-700">
            {price} $
          </span>
          <Link
            to={`/services/${_id}`}
            className="btn btn-warning flex items-center gap-1"
          >
            Explore <MdArrowRightAlt className="text-xl" />
          </Link>
        </div>
    </motion.div>
  );
};

export default FeaturedServiceCard;
