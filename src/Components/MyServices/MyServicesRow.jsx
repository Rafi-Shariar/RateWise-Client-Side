import React from 'react';

const MyServicesRow = () => {
    return (
        <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Title</div>
                    <div className="text-sm opacity-50">Company Name</div>
                  </div>
                </div>
              </td>
              <td>CyberSequirity</td>
              <td>120$</td>
              <td>12-06-2021</td>

              <td>12</td>

              <td>
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