import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading.";
import FeaturedServiceCard from "./featuredServiceCard";
import LoadingContainer from "./LoadingContainer";

const FeaturedContainer = () => {
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        setLoading(false);
        
      });
  });

  return (
    <div>
      <div className="mt-10 text-cente">
        <h1 className="text-primary mb-3 text-2xl lg:text-4xl font-semibold">
          Featured Services
        </h1>
        <p className="text-xs lg:text-lg text-gray-500 mb-4 font-light">
          Discover top-rated services handpicked just for you. Browse, review,
          and connect with the best in the community.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 bg-slate-100 p-3 lg:p-8 rounded-4xl rounded-2xl ">
        {loading ? (
          <LoadingContainer />
        ) : (
          serviceData.map((service) => (
            <FeaturedServiceCard key={service._id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedContainer;
