import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
const RecentReviewsContainer = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/allreviews")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = [];
        for (let i = 0; i < data.length; i += 5) {
          filteredData.push(data[i]);
        }

        setReviews(filteredData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Title */}
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-semibold text-blue-900 lg:text-4xl mt-20">
          Recent Reviews
        </h1>
        <p className="font-extralight">
          See what others are saying about their experience
        </p>
      </motion.div>

      {/* Testing Marquee */}

      <div>
        {loading ? (
          <>
            <div className="h-[200px] flex justify-center items-center">
              <span className="loading loading-ring loading-xl"></span>
            </div>
          </>
        ) : (
          <>
            <Marquee className="mt-10  p-10 rounded-2xl bg-gradient-to-t from-primary via-base-200 to-white border border-gray-200">
              {
                reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
              }
            </Marquee>
          </>
        )}
      </div>
    </div>
  );
};

export default RecentReviewsContainer;
