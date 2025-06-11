import React from "react";
import { Rating } from "@smastrom/react-rating";
const ReviewCard = ({ review, companyInfo }) => {
  const { userName, userImage, rating, description, addedDate } = review;

  return (
    <div className="border rounded-2xl border-blue-100 overflow-hidden shadow-lg">
      {/* section 1 */}
      <div className="flex items-center gap-2 p-3  bg-blue-100">
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
      <div className="">
        <p className="font-extralight text-gray-700 h-[100px] p-3 italic ">
          " {description} "
        </p>
      </div>
      {/* section 2.2 */}
      <div className="flex justify-start ml-4">
        <p className="badge text-xs font-extralight">{addedDate}</p>
      </div>

      {/* section 3 */}

      <div className="flex items-center gap-2 border-t border-slate-300 p-3 mt-3">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={companyInfo?.companyImage} />
          </div>
        </div>
        <div>
          <h1 className="">{companyInfo?.companyName}</h1>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
