import React, { use, useEffect, useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../Context/AuthContext";
import MyServicesRow from "./MyServicesRow";
import NoServiceCard from "./NoServiceCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const MySercvicesTableContainer = () => {
  const { userInfo } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [myservices, setMyservices] = useState([]);
  const [dataUpdated,setDataUpdated] = useState(false);

  const axiosSecure = useAxiosSecure();
  

  useEffect(() => {
    if (userInfo?.email) {
      setLoading(true);
      axiosSecure.get(`/myservices/${userInfo.email}`)
        .then((res) => {
          setMyservices(res.data);
          setLoading(false);
          setDataUpdated(false);
        })
        .catch((error) => {
          console.error("Failed to fetch services:", error);
          setLoading(false);
        });
    }
  }, [userInfo?.email, dataUpdated]);

  return (
    <div>
      <div className="overflow-x-auto">
        {loading ? (
          <>
            <div className="w-50 mx-auto mt-20">
              <span className="loading loading-spinner text-success w-30"></span>
            </div>
          </>
        ) : (
          <>
            {myservices.length > 0 ? (
              <>
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Service Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Reviews</th>
                      <th>Added At</th>

                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {myservices.map((myservice) => (
                      <MyServicesRow
                        myservice={myservice}
                        key={myservice._id}
                        setDataUpdated={setDataUpdated}
                      ></MyServicesRow>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <NoServiceCard></NoServiceCard>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MySercvicesTableContainer;
