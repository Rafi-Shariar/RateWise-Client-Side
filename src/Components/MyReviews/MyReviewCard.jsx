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
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        setLoadingService(false);
      });
  }, [review.serviceID]);

  if (loadingService) {
    return (
      <tr className="flex justify-center items-center w-full">
        <td><span className="loading loading-dots loading-xl"></span></td>
       

      </tr>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedReview = {
      rating: newRating,
      description,
    };

    axiosSecure
      .put(`/myreviews/${review._id}`, updatedReview)
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your review has been updated.", "success");
          setUpdate(true);
          modalRef.current?.close();
        } else {
          Swal.fire("Oops", "No changes were made.", "info");
        }
      })
      .catch((err) => Swal.fire("Error", err.message, "error"));
  };

  const handleDelete = () => {
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
        axiosSecure
          .delete(`/myreviews/${review._id}`)
          .then((result) => {
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
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Unauthorized, Can't DELETE!",
              text: "Please login again.",
            });
          });
      }
    });
  };

  return (
    <tr className="">
      <td className="hover:bg-sky-50">
        <Link to={`/services/${serviceData._id}`}>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={serviceData.image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceData.title}</div>
            <div className="text-sm opacity-50">{serviceData.companyName}</div>
          </div>
        </div>
        </Link>
      </td>

      <td>
        <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly />
      </td>

      <td className="text-xs text-slate-500">{review.description.slice(0, 50)}…</td>
      <td>{review.addedDate}</td>

      <td className="flex gap-3 mt-4">
       

        <button
          className="btn btn-soft btn-success"
          onClick={() => modalRef.current?.showModal()}
        >
          <HiOutlinePencil /> Edit
        </button>
        <dialog ref={modalRef} className="modal">
          <form method="dialog" onSubmit={handleSubmit} className="modal-box">
            <h3 className="font-bold text-lg text-cyan-500">
              Update Your Review
            </h3>
            <div className="divider"></div>

            <div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-600">
                  {serviceData.title}
                </h1>
              </div>
              <div className="my-3">
                <h1 className="badge mr-3">
                  <RiHomeOfficeFill />
                  {serviceData.companyName}
                </h1>
                <h1 className="badge">
                  <BiCategory />
                  {serviceData.category}
                </h1>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center">
              <h1 className="font-semibold text-yellow-500 text-xl">Rating:</h1>
              <Rating
                value={newRating}
                onChange={setNewRating}
                style={{ maxWidth: 120 }}
              />
            </div>

            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea w-full mt-4 text-gray-600"
              rows={4}
              required
            />

            <div className="modal-action flex flex-col md:flex-row justify-between">
              <div>
                <h1 className="badge p-4 text-slate-400">
                  Reviewed: {review.addedDate}
                </h1>
              </div>
              <div className="flex gap-4">
                <button type="submit" className="btn btn-success ">
                  <IoIosSave />
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-error"
                  onClick={() => modalRef.current?.close()}
                >
                  <RxCross2 />
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </dialog>
        <button onClick={handleDelete} className="btn btn-soft btn-error">
          <MdDeleteOutline /> Delete
        </button>
      </td>
    </tr>
  );
};

export default MyReviewCard;
