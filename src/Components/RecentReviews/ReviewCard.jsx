import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';

const ReviewCard = ({review}) => {

      const {serviceID, userName, userImage, rating, description, addedDate } = review;
      const [serviceData, setServiceData] = useState({});

      useEffect(()=>{

        fetch(`http://localhost:3000/services/${serviceID}`)
        .then(res => res.json())
        .then( data => {
            setServiceData(data);
        })

      },[])

    
    return (
        <div className='mx-5'>
             <div className="border rounded-2xl border-sky-300 overflow-hidden shadow-xl max-w-[250px]">
                  {/* section 1 */}
                  <div className="flex items-center gap-2 p-3  bg-sky-100">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={userImage} />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-lg">{userName}</h1>
                      <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
                    </div>
                  </div>
            
                  {/* section 2 */}
                  <div className='bg-slate-50'>
                    <p className="font-extralight text-gray-700 h-[100px] p-3 italic">
                      " {description} "
                    </p>
                  </div>
                  {/* section 2.2 */}
                  <div className="flex justify-start pl-4 bg-slate-50 pb-3">
                    <p className="badge text-xs font-extralight">{addedDate}</p>
                  </div>
            
                  {/* section 3 */}
            
                  <div className="flex items-center gap-2 border-t border-slate-300 p-3 bg-slate-50">
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src={serviceData.image} alt="" className='w-10'/>
                      </div>
                    </div>
                    <div>
                        <h1>{serviceData.companyName}</h1>
                      
                    </div>
                  </div>
            </div>
        </div>
    );
};

export default ReviewCard;