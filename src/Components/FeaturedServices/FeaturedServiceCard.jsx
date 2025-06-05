import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "motion/react";
const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
}
const FeaturedServiceCard = ({ featured }) => {
  const { _id, image, title, description, price } = featured;

  return (
    <motion.div className="shadow-lg p-5 min-h-[200px]"
    whileHover={{ scale: 1.1 }}
            
            >
      <div className="flex gap-5 items-center">
        <figure className="">
          <img src={image} alt={title} className=" w-7 h-8" />
        </figure>
        <h2 className=" text-xl">{title}</h2>
      </div>

      <div className="">
        <p className="text-sm text-gray-600 mt-5 font-light">
          {description.slice(0, 100)}...
        </p>

        
      </div>

      <div className="flex justify-between items-center mt-10">
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
