import React, { use, useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router";
const AddReviewForm = () => {
  const [rating, setRating] = useState(0);
  const {user} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddReview = e =>{
    e.preventDefault();

    if(!user){
         navigate('/login', { state: location.pathname });
         return;
    }

  }

  return (
    <div
      className="bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-400 to-90%
 p-5 rounded-2xl"
    >
      <h1 className="text-xl flex items-center gap-2">
        <FaPenAlt />
        Give A Review
      </h1>

      <div>
        <form action="" className="p-2" onSubmit={handleAddReview}>
          <legend className="fieldset-legend">Experience</legend>
          <textarea
            type="text"
            className="textarea h-[150px] w-full"
            placeholder="Share your experience..."
            name="description"
            required
          />

          <legend className="fieldset-legend">Rate your experience</legend>
          <Rating
            style={{ maxWidth: 150 }}
            value={rating}
            onChange={setRating}
            required
          />

          <div className="flex justify-center">
            <button type="submit" className="btn mt-5 bg-blue-700 text-white hover:bg-blue-400">
              Add Review
            </button>
          </div>
          <p className="text-xs text-center mt-2 text-orange-600">
            Login first, to add reviews.
          </p>
        </form>
      </div>
    </div>
  );
};

export default AddReviewForm;
