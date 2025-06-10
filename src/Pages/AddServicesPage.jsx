import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import AddServicesForm from "../Components/Forms/AddServicesForm";
const AddServicesPage = () => {

  document.title = "Add Service | Ratewise";

  const { userInfo } = use(AuthContext);

  return (
    <div>
      {userInfo ? (
        <>
          {/* title */}
          <div className="mt-10 p-2">
            <h1 className="text-2xl font-semibold text-blue-900 lg:text-4xl mb-2">
              Hi{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {userInfo?.name}
              </span>
              , Add a New Service
            </h1>
            <p className="font-extralight text-xs lg:text-sm">
              Easily expand your platform by adding new services to meet your
              users’ needs. Fill in the details below to create and publish a
              new service.
            </p>
          </div>

          {/* Form */}
          <div className="flex justify-center items-center mt-10">
            <AddServicesForm userInfo={userInfo}></AddServicesForm>

          </div>


        </>
      ) : (
        <>
          <div className="flex justify-center items-center mt-20">
            <span className="loading loading-ring loading-xl"></span>
          </div>
        </>
      )}
    </div>
  );
};

export default AddServicesPage;
