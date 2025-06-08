import React, { use, useEffect, useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../Context/AuthContext";
import MyServicesRow from "./MyServicesRow";
import NoServiceCard from "./NoServiceCard";
const MySercvicesTableContainer = () => {
  const { userInfo } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [myservices, setMyservices] = useState([]);

  useEffect(() => {
    if (userInfo?.email) {
      setLoading(true);
      fetch(`http://localhost:3000/myservices/${userInfo.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyservices(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch services:", error);
          setLoading(false);
        });
    }
  }, [userInfo?.email]);

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
