import React from "react";
import { Link } from "react-router";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react"
const FeaturedServiceCard = ({ service }) => {

    const {_id,image,title,description,price} = service;

  return (
    <div
    >

      <motion.div className="card bg-base-100 shadow-lg min-h-[400px]"
      initial={{ x: -700, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}>
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-20"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="font-light text-gray-500">
            {description}
          </p>
         
        </div>
         
         <div className="p-5">
            <div className="divider"></div>
        <div className="flex justify-between ">
            <h1 className="btn btn-soft btn-success">{price} $</h1>
            <Link to={`/services/${_id}`} className="btn btn-soft btn-warning"><FaExternalLinkAlt />Explore</Link>
            
          </div>
         </div>
        
      </motion.div>
    </div>
  );
};

export default FeaturedServiceCard;
