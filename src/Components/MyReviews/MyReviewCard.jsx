import React, { useEffect, useRef, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { RiHomeOfficeFill } from "react-icons/ri";
import { Link } from "react-router";
import { BiCategory } from "react-icons/bi";
import { IoIosSave } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { rating } from "@material-tailwind/react";
const MyReviewCard = ({ review, setUpdate }) => {
  const modalRef = useRef();
  const [serviceData, setServiceData] = useState(null);
  const [loadingService, setLoadingService] = useState(true);
  const [newRating, setNewRating] = useState(review.rating);
  const [description, setDescription] = useState(review.description);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetch(`https://ratewise-seven.vercel.app/services/${review.serviceID}`)
      .then(res => res.json())
      .then(data => {
        setServiceData(data)
        setLoadingService(false)
  })
      
  }, [review.serviceID]);

  if (loadingService) {
    return (
      <div className="flex w-96 flex-col gap-4 max-w-md mx-auto p-4 border border-slate-400 rounded-lg">
        <div className="skeleton h-24 w-full"></div>
        <div className="skeleton h-4 w-1/2"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }



  const handleSubmit = e => {
    e.preventDefault();

    const updatedReview = {
      rating : newRating,
      description
    }

    axiosSecure.put(`/myreviews/${review._id}`, updatedReview)
      .then(result => {
        if (result.data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your review has been updated.", "success");
          setUpdate(true);
          modalRef.current?.close();
        } else {
          Swal.fire("Oops", "No changes were made.", "info");
        }
      })
      .catch(err => Swal.fire("Error", err.message, "error"));
  };

   const handleDelete =()=>{
         Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
  
          axiosSecure.delete(`/myreviews/${review._id}`)
          .then( (result) => {

            if (result.data.deletedCount > 0) {
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                          });
                          setUpdate(true);
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Unauthorized, Can't DELETE!",
                            text: "Please login again.",
                          });
                        }
              
          })
          .catch(()=>{
            Swal.fire({
                          icon: "error",
                          title: "Unauthorized, Can't DELETE!",
                          text: "Please login again.",
                        });
          })
  
          
  
  
        }
      });
  
  
      }

  return (
    <div className="md:w-2xl lg:w-3xl mx-auto p-6 border border-gray-200 rounded-xl shadow-xl">
      <div className="flex items-center gap-4 mb-4">
        <img src={serviceData.image} alt="" className="w-18 rounded-lg" />
        <div>
          <h2 className="font-semibold text-xl">{serviceData.title}</h2>
          <p className="text-gray-500">{serviceData.companyName}</p>
          <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly />
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-xs">{serviceData.description.slice(0, 150)}…</p>

      <h1 className="text-blue-800 mb-2 font-semibold">Your Review:</h1>

      <p className="border p-4 bg-blue-50 rounded-xl border-blue-200">
        
        <span className="text-gray-500">" {review.description} "</span>
        <br />
        <span className="badge mt-5">Reviewed on {review.addedDate}</span>
      </p>

      <div className="flex gap-3 mt-4">
        <Link to={`/services/${serviceData._id}`} className="btn btn-soft btn-warning">
          <FiExternalLink /> Explore
        </Link>

        <button
          className="btn btn-soft btn-success"
          onClick={() => modalRef.current?.showModal()}
        >
          <HiOutlinePencil /> Edit
        </button>
        <dialog ref={modalRef} className="modal">
        <form method="dialog" onSubmit={handleSubmit} className="modal-box">
          <h3 className="font-bold text-lg text-cyan-500">Update Your Review</h3>
            <div className="divider"></div>

          <div>
            <div>
                <h1 className="text-2xl font-semibold text-gray-600">{serviceData.title}</h1>
            </div>
            <div className="my-3">
                <h1 className="badge mr-3"><RiHomeOfficeFill />{serviceData.companyName}</h1>
                <h1 className="badge"><BiCategory />{serviceData.category}</h1>
            </div>
          </div>
          <div className="divider"></div>
         <div className="flex items-center">
            <h1 className="font-semibold text-yellow-500 text-xl">Rating:</h1>
             <Rating value={newRating} onChange={setNewRating} style={{ maxWidth: 120 }} />
         </div>

          <textarea
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="textarea w-full mt-4 text-gray-600"
            rows={4}
            required
          />

          <div className="modal-action flex flex-col md:flex-row justify-between">
            <div>
                 <h1 className="badge p-4 text-slate-400">Reviewed: {review.addedDate}</h1>
            </div>
            <div className="flex gap-4">
                <button type="submit" className="btn btn-success ">
              <IoIosSave />Save
            </button>
            <button type="button" className="btn btn-error" onClick={() => modalRef.current?.close()}>
              <RxCross2 />Cancel
            </button>
            </div>
          </div>
        </form>
      </dialog>
        <button onClick={handleDelete} className="btn btn-soft btn-error">
          <MdDeleteOutline /> Delete
        </button>
      </div>

      
    </div>
  );
};

export default MyReviewCard;
