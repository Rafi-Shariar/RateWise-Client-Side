import React from "react";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";

const AddServicesForm = ({ userInfo }) => {
  const notify = () => toast("New Service Added!");

  const handleAddService = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const serviceData = Object.fromEntries(formData.entries());

    const addedDate = format(new Date(), "yyyy-MM-dd");

    const newServiceData = { ...serviceData, addedDate };
    console.log(newServiceData);

    //Adding data to DB
    fetch("https://ratewise-seven.vercel.app/addservices", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newServiceData),
    })
      .then((res) => res.json())
      .then(() => {
        //sweetalert
        notify();
        e.target.reset();
      });
  };
  return (
    <div className="p-2 my-10">
      <form
        onSubmit={handleAddService}
        action=""
        className=" bg-linear-to-r from-blue-900 to-sky-700 p-7 rounded-2xl lg:w-[500px]"
      >
        <legend className="fieldset-legend text-white">Company Logo</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="add company logo url..."
          name="image"
          required
        />

        <legend className="fieldset-legend text-white">Service title</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter title..."
          name="title"
          required
        />

        <legend className="fieldset-legend text-white">Company Name</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter your photourl..."
          name="companyName"
          required
        />

        <legend className="fieldset-legend text-white">Website</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter your website..."
          name="website"
          required
        />

        <legend className="fieldset-legend text-white">Description</legend>
        <textarea
          type="text"
          className="textarea w-full"
          placeholder="Add description..."
          name="description"
          required
        />

        <legend className="fieldset-legend text-white">Category</legend>
        <select name="category" required className="input w-full">
          <option value="">Select a category</option>
          <option value="Web Development">Web Development</option>
          <option value="Architecture & Interior">
            Architecture & Interior
          </option>
          <option value="Electronics & Repair">Electronics & Repair</option>
          <option value="Automobile Services">Automobile Services</option>
          <option value="Retail & Stores">Retail & Stores</option>
          <option value="Grocery & Super Shops">Grocery & Super Shops</option>
          <option value="Graphic & Logo Design">Graphic & Logo Design</option>
          <option value="Content & Copywriting">Content & Copywriting</option>
          <option value="Video Production">Video Production</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="SEO & Marketing">SEO & Marketing</option>
          <option value="UI/UX & Product Design">UI/UX & Product Design</option>
          <option value="Social Media Services">Social Media Services</option>
          <option value="Consulting & Strategy">Consulting & Strategy</option>
          <option value="Home & Cleaning Services">
            Home & Cleaning Services
          </option>
        </select>

        <legend className="fieldset-legend text-white">Price</legend>
        <input
          type="number"
          className="input w-full"
          placeholder="Price of your service..."
          name="price"
          required
        />

        <legend className="fieldset-legend text-white">Added By</legend>
        <input
          type="text"
          className="input w-full text-slate-400"
          name="userEmail"
          defaultValue={userInfo?.email}
          readOnly
        />

        <button
          type="submit"
          className="btn bg-yellow-500 text-white w-full mt-4 hover:bg-white hover:text-yellow-700"
        >
          Add Service
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddServicesForm;
