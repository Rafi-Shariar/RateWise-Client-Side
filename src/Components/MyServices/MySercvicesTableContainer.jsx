import React, { use, useEffect, useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../Context/AuthContext";
const MySercvicesTableContainer = () => {

    const {userInfo} = use(AuthContext);
    const [loading, setLoading] = useState(true);
    const [myservices, setMyservices] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:3000/myservices/${userInfo?.email}`)
        .then(res => res.json())
        .then( data => {
            setMyservices(data);
            setLoading(false);
        })
    },[])


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Added At</th>
              <th>Total Reviews</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                loading? (<>
                    <tr>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>

              <td>
                <button className="btn btn-circle text-lg bg-green-100 text-green-700 mr-4">
                  <FaPenToSquare />
                </button>
                <button className="btn btn-circle text-lg bg-red-100 text-red-800">
                  <MdDelete />
                </button>
              </td>
                    </tr>
                    <tr>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>

              <td>
                <button className="btn btn-circle text-lg bg-green-100 text-green-700 mr-4">
                  <FaPenToSquare />
                </button>
                <button className="btn btn-circle text-lg bg-red-100 text-red-800">
                  <MdDelete />
                </button>
              </td>
                    </tr>
                    <tr>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>
                     <td><span className="loading loading-ring loading-xs"></span></td>

              <td>
                <button className="btn btn-circle text-lg bg-green-100 text-green-700 mr-4">
                  <FaPenToSquare />
                </button>
                <button className="btn btn-circle text-lg bg-red-100 text-red-800">
                  <MdDelete />
                </button>
              </td>
                    </tr>
                   


                </>) : (<>
                
                </>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySercvicesTableContainer;
