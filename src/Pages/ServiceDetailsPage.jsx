import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import lottieAnimation from "../assets/Lottie/Loading.json";
import Lottie from 'lottie-react';
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
const ServiceDetailsPage = () => {

    const [serviceData,setServiceData] = useState(null);
    const [loader,setLoader] = useState(true);
    const data = useLoaderData();
    

    useEffect(()=>{
        setServiceData(data);
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

                 </>)
            }
        </div>
    );
};

export default ServiceDetailsPage;