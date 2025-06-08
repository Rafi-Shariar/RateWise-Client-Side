import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
const MyServicesRow = ({myservice}) => {

    const {_id, image,title,companyName,category,price,addedDate} = myservice;
   

    return (
        <tr>
            
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{title}</div>
                    <div className="text-sm opacity-50">{companyName}</div>
                  </div>
                </div>
              </td>
              <td>{category}</td>
              <td>{price}$</td>
              <td>{addedDate}</td>


              <td className="flex">
                <button className="btn btn-circle text-lg bg-green-100 text-green-700 mr-4">
                  <FaPenToSquare />
                </button>
                <button className="btn btn-circle text-lg bg-red-100 text-red-800">
                  <MdDelete />
                </button>
              </td>
            </tr>
    );
};

export default MyServicesRow;