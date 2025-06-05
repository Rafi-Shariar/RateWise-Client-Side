import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router";

const FeaturedServiceCard = ({ featured }) => {
  const { _id, image, title, description, price } = featured;

  return (
    <div className="shadow-lg p-5">
      <div className="flex gap-5 items-center">
        <figure className="">
          <img src={image} alt={title} className=" w-7 h-8" />
        </figure>
        <h2 className=" text-xl">{title}</h2>
      </div>

      <div className="">
        <p className="text-sm text-gray-600 mt-5">
          {description.slice(0, 100)}...
        </p>

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
      </div>
    </div>
  );
};

export default FeaturedServiceCard;
