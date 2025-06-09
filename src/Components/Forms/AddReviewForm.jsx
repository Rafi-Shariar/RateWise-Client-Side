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

    fetch("http://localhost:3000/addreview", {
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
      className="bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-400 to-90%
 p-5 rounded-2xl shadow-2xl lg:mt-20"
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
            value={ratings}
            onChange={setRatings}
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="btn mt-5 bg-blue-700 text-white hover:bg-blue-400"
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
