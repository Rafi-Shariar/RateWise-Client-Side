import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import lottieAnimation from "../assets/Lottie/Loading.json";
import Lottie from 'lottie-react';
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import AddReviewForm from '../Components/Forms/AddReviewForm';
import ReviewContainer from '../Components/Reviews/ReviewContainer';
import { CalculateAvgRatting } from '../utilities/CalculateAvgRatting';
import { Rating } from "@smastrom/react-rating";
const ServiceDetailsPage = () => {

    const [serviceData,setServiceData] = useState(null);
    const [loader,setLoader] = useState(true);
    const data = useLoaderData();
    const [reviews,setReviews] = useState([]);
    const [companyInfo,setCompanyInfo] = useState(null);
    const [currentserviceID, setCurrentServiceID] = useState(null);
    const [avgRatting, setAvgRatting] = useState(0);

    const addNewReviews = {reviews,setReviews};
    

    useEffect(()=>{
        setServiceData(data);

        fetch(`https://ratewise-seven.vercel.app/reviews/${data?._id}`)
        .then(res => res.json())
        .then(reviewData => {
            setReviews(reviewData);
            const res = CalculateAvgRatting(reviewData);
            setAvgRatting(res);
            
            
            const infos = {
                companyName : data?.companyName,
                companyImage : data?.image
            }
            setCurrentServiceID(data._id);
            setCompanyInfo(infos);
        })

        setLoader(false);
    },[data])


    

    


    return (
        <div>
            {
                loader? 
                (<>
                     <div className=" flex justify-center items-center min-h-screen">
              <Lottie
                animationData={lottieAnimation}
                loop={true}
                className="w-30"
              />
            </div>
                </>) :
                 (<>
                 <div className='mt-10 p-2'>

                    <div className='flex justify-center items-center max-w-4xl mx-auto p-2 gap-5'>
                        <div className='border p-5 rounded-2xl border-slate-300'>
                            <img src={serviceData.image} alt="" className='w-20'/>
                        </div>

                        <div className='flex flex-col justify-evenly'>
                            <h1 className='text-xl lg:text-2xl font-semibold'>{serviceData.title}</h1>
                            <h1 className='badge p-4 lg:text-lg lg:mt-3'><RiHomeOfficeFill/>{serviceData.companyName}</h1>
                        </div>
                    </div>

                    <div className='max-w-4xl mx-auto flex flex-col md:flex-row md:justify-center gap-5 p-2'>

                        <a href={serviceData.website} target='_blank' className='btn btn-info'><FaExternalLinkAlt />Visite Website</a>
                        <button className='btn  btn-success'><RiMoneyDollarBoxFill />{serviceData.price} $</button>
                        <button className='btn btn-warning'><BiCategory />{serviceData.category}</button>

                    </div>

                    <div className='max-w-4xl mx-auto bg-base-200 p-5 mt-10 rounded-2xl'>
                        <h1 className='text-2xl font-semibold text-purple-900'>Description</h1>
                        <p className='text-slate-700 mt-6'>{serviceData.description}</p>

                        <div className='mt-6'>
                            <p className='badge mr-5 font-extralight'>Created At: {serviceData.addedDate}</p>
                            <p className='badge font-extralight'>Created By: {serviceData.userEmail}</p>
                        </div>
                    </div>

                   

                 </div>

                 {/* Review Section */}
                 <section className='p-2'>

                    

                    <div className='flex flex-col-reverse lg:flex-row gap-10 mb-20'>
                        {/* User Review Section */}
                        <section className=' lg:w-2/3'>
                        <div className='text-3xl mt-10 mb-5 text-blue-900 flex items-center gap-3'>
                            <h1>Reviews</h1>
                            <h1>({reviews?.length})</h1>
                            <div><Rating style={{ maxWidth: 130 }} value={avgRatting} readOnly/></div>
                        </div>
                            {
                                reviews? 
                                (<>
                                    <ReviewContainer reviews={reviews} companyInfo={companyInfo}></ReviewContainer>
                                </>) : 
                                (<>
                                    <div className='flex justify-center items-center h-full'>
                                        <span className="loading loading-ring loading-xl"></span>
                                    </div>
                                </>)
                            }
                        </section>

                        {/* Add Review Section */}
                        <section className=' lg:w-1/3'>
                            <AddReviewForm currentserviceID={currentserviceID} addNewReviews={addNewReviews}></AddReviewForm>
                        </section>
                    </div>

                 </section>

                 </>)
            }
        </div>
    );
};

export default ServiceDetailsPage;