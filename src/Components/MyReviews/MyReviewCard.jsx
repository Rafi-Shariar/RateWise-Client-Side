import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
const MyReviewCard = ({review,setUpdate }) => {
    const modalRef = useRef();
  const [serviceData, setServiceData] = useState({});
  const [loading, setLoading] = useState(true);
  const [ratings, setRatings] = useState(0);

  useEffect(() => {
    if (!review.serviceID || !review){
        return (
            <div className="flex w-96 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
        )
    };
    setLoading(true)

    fetch(`http://localhost:3000/services/${review?.serviceID}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        setLoading(false);
      });
  }, [review?.serviceID]);

  //Edit Reviews
  const handleUpdateReview = e =>{
    e.preventDefault();

    const newdescription = e.target.description.value;

    const updatedReview = {
        rating: ratings,
        description: newdescription
    };

    fetch(`http://localhost:3000/myreviews/${review?._id}`,{
        method:'PUT',
        headers:{'content-type' : 'application/json'},
        body: JSON.stringify(updatedReview)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.modifiedCount > 0){
            Swal.fire({
                        title: "Update Done !",
                        icon: "success",
                        draggable: true,
            });
            
            setUpdate(true);
        }
        else{
            Swal.fire({
                        icon: "error",
                        title: "Updated Failed",
                        text: "Nothing To Updated!",
                      });
        }
    })




  }

  return (
    <div>
      {loading ? (
        <>
          <div className="flex w-96 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </>
      ) : (
        <>
          <div className="max-w-3xl mx-auto border p-5 lg:p-10 rounded-2xl shadow-2xl border-gray-200">
            {/* part 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <div className="border p-5 rounded-2xl border-gray-200">
                <img src={serviceData?.image} alt="" className="w-16" />
              </div>

              <div>
                <h1 className="text-xl font-semibold">{serviceData?.title}</h1>
                <h1 className="text-gray-500">{serviceData?.companyName}</h1>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={review?.rating}
                  readOnly
                />
              </div>
            </div>

            {/* part2 */}
            <div>
              <h1 className="text-xs text-gray-600 mt-5">
                {serviceData?.description?.slice(0, 200)}...
              </h1>
            </div>

            {/* part3 */}

            <div>
              <h1 className="text-sky-700 mt-3">My Review</h1>
              <h1 className="border p-5 text-gray-700 rounded-2xl border-primary mt-3">
                " {review?.description}. " <br />
                <br />
                <span className="badge text-slate-400">
                  Reviewed: {review?.addedDate}
                </span>
              </h1>
              <div>
                <p></p>
              </div>
            </div>

            {/* part4 */}
            <div className="flex flex-col lg:flex-row gap-3 mt-5">
              <Link
                to={`/services/${serviceData?._id}`}
                className="btn btn-soft btn-warning"
              >
                <FiExternalLink />
                Explore
              </Link>
                
                {/* modal */}
              <div>
                    <button className="btn btn-soft btn-success w-full" onClick={()=>document.getElementById('my_modal_1').showModal()}> <HiOutlinePencil />Edit</button>
                <dialog id="my_modal_1" className="modal" ref={modalRef}>
                  <div className="modal-box">
                    <h3 className="font-bold text-lg my-6">Update Service Information</h3>
                    <h2 className="text-lg font-semibold text-blue-600 my-4">{serviceData?.title}</h2>
                    <div className="mb-3">
                        <p className="badge mr-2">{serviceData?.category}</p>
                        <p className="badge">{review?.addedDate}</p>
                    </div>
                    <div>
                      <form
                        onSubmit={handleUpdateReview}
                        action=""
                        className=" bg-linear-to-r from-blue-200 to-sky-200 p-7 rounded-2xl"
                      >
                        <legend className="fieldset-legend">Rating</legend>
                         <Rating
                                    style={{ maxWidth: 120 }}
                                    value={ratings}
                                    onChange={setRatings}
                                    required
                                  />
                
                        
                       <legend className="fieldset-legend">Update Your Experience</legend>
          <textarea
            type="text"
            className="textarea h-[150px] w-full text-gray-500"
            defaultValue={review?.description}
            name="description"
            required
          />
                
                
                         <button
                          type="submit"
                          className="btn bg-purple-500 text-white w-full mt-4 hover:bg-white hover:text-purple-700"
                        >
                          UPDATE
                        </button>
                
                
                        <div className="modal-action">
                         
                    
                     
                    </div>
                
                
                        
                      </form>
                    </div>
                
                    <div className="flex justify-center mt-3">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                      
                        <button className="btn bg-red-500 text-white">Cancle</button>
                      </form>
                    
                    </div>
                  </div>
                </dialog>
              </div>
              <button className="btn btn-soft btn-error">
                <MdDeleteOutline />
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyReviewCard;
