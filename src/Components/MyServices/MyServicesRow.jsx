import { useRef } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const MyServicesRow = ({ myservice ,setDataUpdated}) => {
  const modalRef = useRef();

  const { _id,website, image, title, companyName, category, price, addedDate, description,userEmail } =
    myservice;

    // Updating Data
    const handleUpdatedData = e =>{
      e.preventDefault();
      const form = e.target;
    const formData = new FormData(form);
    const UpdatedServiceData = Object.fromEntries(formData.entries());

     console.log(userEmail);
     const updatedData = {...UpdatedServiceData,addedDate,userEmail};

     fetch(`https://ratewise-seven.vercel.app/update/${_id}`,{
      method:'PUT',
      headers:{'content-type' : 'application/json'},
      body: JSON.stringify(updatedData)

     })
     .then(res => res.json())
     .then((data)=>{
      if (data.modifiedCount) {
          Swal.fire({
            title: "Update Done !",
            icon: "success",
            draggable: true,
          });
          setDataUpdated(true);
        } else {
          Swal.fire({
            icon: "error",
            title: "Updated Failed",
            text: "Nothing To Updated!",
          });
        }
     })

     modalRef.current?.close();
     
     
     
    
    
    }

    //Deleting Data
    const handleDeleteData =()=>{
       Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://ratewise-seven.vercel.app/myservices/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then( () => {

          setDataUpdated(true)
            
            
        })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });


      }
    });


    }

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
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

        {/* Modal Button */}

        <button className="btn btn-circle text-lg bg-green-100 text-green-700 mr-4" onClick={()=>document.getElementById('my_modal_1').showModal()}><FaPenToSquare /></button>
<dialog id="my_modal_1" className="modal" ref={modalRef}>
  <div className="modal-box">
    <h3 className="font-bold text-lg my-6">Update Service Information</h3>
    <div>
      <form
      onSubmit={handleUpdatedData}
     
        action=""
        className=" bg-linear-to-r from-blue-200 to-sky-200 p-7 rounded-2xl"
      >
        <legend className="fieldset-legend">Company Logo</legend>
        <input
          type="text"
          className="input w-full"
          defaultValue={image}
          name="image"
          required
        />

        <legend className="fieldset-legend">Service title</legend>
        <input
          type="text"
          className="input w-full"
          defaultValue={title}
          name="title"
          required
        />

        <legend className="fieldset-legend">Company Name</legend>
        <input
          type="text"
          className="input w-full"
          defaultValue={companyName}
          name="companyName"
          required
        />

        <legend className="fieldset-legend">Website</legend>
        <input
          type="text"
          className="input w-full"
          defaultValue={website}
          name="website"
          required
        />

        <legend className="fieldset-legend">Description</legend>
        <textarea
          type="text"
          className="textarea w-full"
          defaultValue={description}
          name="description"
          required
        />

        <legend className="fieldset-legend">Category</legend>
        <select name="category" required defaultValue={category} className="input w-full">
          <option value="">Select a category</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Content Writing">Content Writing</option>
          <option value="Video Editing">Video Editing</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="SEO Services">SEO Services</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Social Media Management">
            Social Media Management
          </option>
          <option value="Consulting & Strategy">Consulting & Strategy</option>
        </select>

        <legend className="fieldset-legend" >Price</legend>
        <input
          type="number"
          className="input w-full"
          defaultValue={price}
          name="price"
          required
        />

         <button
          type="submit"
          className="btn bg-purple-500 text-white w-full mt-4 hover:bg-white hover:text-purple-700"
        >
          UPDATE
        </button>


        <div className="modal-action">
         
    
     
    </div>


        
      </form>
    </div>

    <div className="flex justify-center mt-3">
        <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
      
        <button className="btn bg-red-500 text-white">Cancle</button>
      </form>
    
    </div>
  </div>
</dialog>


        {/* Delete button */}
        <button onClick={handleDeleteData} className="btn btn-circle text-lg bg-red-100 text-red-800">
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

export default MyServicesRow;
