import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FiExternalLink } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
const MyReviewCard = ({review}) => {

    
    const [serviceData, setServiceData] = useState({})
    const [loading,setLoading] = useState(true);

    useEffect(()=>{

        if(!review?.serviceID) return;

        fetch(`http://localhost:3000/services/${review?.serviceID}`)
        .then(res => res.json())
        .then(data =>{
            setServiceData(data);
            setLoading(false);
        })
        
    },[review?.serviceID])
    
    return (
        <div>
            {
                loading? (<>

                    <div className="flex w-96 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
                
                </>) : (<>
                <div className='max-w-3xl mx-auto border p-5 lg:p-10 rounded-2xl shadow-2xl border-gray-200'>
            {/* part 1 */}
            <div className='flex flex-col lg:flex-row items-center gap-5'>
            <div className='border p-5 rounded-2xl border-gray-200'>
                <img src={serviceData?.image} alt="" className='w-16'/>
            </div>

            <div>
                <h1 className='text-xl font-semibold'>{serviceData?.title}</h1>
                <h1 className='text-gray-500'>{serviceData?.companyName}</h1>
                <Rating style={{ maxWidth: 100 }} value={review?.rating} readOnly />

            </div>

            

            </div>

            {/* part2 */}
            <div>
                <h1 className='text-xs text-gray-600 mt-5'>{serviceData?.description?.slice(0,200)}...</h1>
            </div>

            {/* part3 */}

            <div>
                <h1 className='text-sky-700 mt-3'>My Review</h1>
                <h1 className='border p-5 text-gray-700 rounded-2xl border-primary mt-3'>
                    " {review?.description}. " <br /><br />
                    <span className='badge text-slate-400'>
Reviewed: {review?.addedDate}
                    </span>
                </h1>
                <div>
                    <p ></p>
                </div>
            </div>

            {/* part4 */}
            <div className='flex flex-col lg:flex-row gap-3 mt-5'>
                <Link to={`/services/${serviceData?._id}`} className='btn btn-soft btn-warning'><FiExternalLink />Explore</Link>
                <button className='btn btn-soft btn-success'><HiOutlinePencil />Edit</button>
                <button className='btn btn-soft btn-error'><MdDeleteOutline />Delete</button>
            </div>
        </div>
                </>)
            }
        </div>
    );
};

export default MyReviewCard;