import React, { use, useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { format } from "date-fns";
import Swal from "sweetalert2";
const AddReviewForm = ({ currentserviceID ,addNewReviews}) => {
  const [ratings, setRatings] = useState(0);
  const { user, userInfo } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {reviews, setReviews} = addNewReviews;

  const handleAddReview = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login", { state: location.pathname });
      return;
    }

    const serviceID = currentserviceID;
    const userID = userInfo.email;
    const userName = userInfo.name;
    const userImage = userInfo.photourl;
    const description = e.target.description.value;
    const rating = ratings;
    const addedDate = format(new Date(), "dd-MM-yyyy");

    const newReview = {
      serviceID,
      userID,
      userName,
      userImage,
      description,
      rating,
      addedDate,
    };

    fetch("https://ratewise-seven.vercel.app/addreview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then(() => {

        const updatedReviewsList = [...reviews,newReview];
        setReviews(updatedReviewsList);

        
        Swal.fire({
          title: "Review Added!",
          icon: "success",
        });
      });
  };

  return (
    <div
      className="bg-linear-to-r from-blue-900 to-blue-500
 p-5 rounded-2xl shadow-2xl lg:mt-20"
    >
      <h1 className="text-2xl flex items-center gap-2 text-white">
        <FaPenAlt />
        Give A Review
      </h1>

<div className="divider before:bg-slate-100 after:bg-slate-100"></div>

      <div>
        <form action="" className="p-2" onSubmit={handleAddReview}>
          <legend className="fieldset-legend text-white">Experience</legend>
          <textarea
            type="text"
            className="textarea h-[150px] w-full"
            placeholder="Share your experience..."
            name="description"
            required
          />

          <legend className="fieldset-legend text-white">Rate your experience</legend>
          <Rating
            style={{ maxWidth: 150 }}
            value={ratings}
            onChange={setRatings}
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="btn mt-5 bg-yellow-400 text-white hover:bg-yellow-600"
            >
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
