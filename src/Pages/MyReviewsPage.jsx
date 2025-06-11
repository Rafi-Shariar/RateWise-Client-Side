// MyReviewsPage.jsx
import React, { useContext, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { AuthContext } from '../Context/AuthContext';
import MyReviewCard from '../Components/MyReviews/MyReviewCard';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyReviewsPage = () => {
  document.title = "My Reviews | Ratewise";
  const { userInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [myReviews, setMyReviews] = useState([]);
  const [update, setUpdate] = useState(false);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!userInfo?.email) return;

    setLoading(true);
    axiosSecure.get(`/myreviews/${userInfo.email}`)
      .then(res => {
        setMyReviews(res.data);
        setLoading(false);
        setUpdate(false);
      })
      .catch(() => setLoading(false));
  }, [userInfo?.email, update]);


  
  return (
    <div>
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className='p-2'
      >
        <h1 className="text-2xl font-semibold text-blue-900 lg:text-4xl mt-10 mb-3">
          Review History
        </h1>
        <p className="font-extralight text-xs lg:text-sm">
          Keep track of the reviews you’ve submitted across different services and platforms.
        </p>
      </motion.div>

      <div className='p-2'>
        {loading ? (
          <div className='max-w-3xl mx-auto mt-20 text-center'>
            <span className="loading loading-spinner text-success w-16 h-16 bg-blue-100"></span>
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-10 my-10'>
            {myReviews.map(review => (
              <MyReviewCard key={review._id} review={review} setUpdate={setUpdate} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviewsPage;