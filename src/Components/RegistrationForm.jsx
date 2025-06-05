import React from "react";

const RegistrationForm = () => {
  return (
    <div>
      <form action="" className="lg:w-2/3 bg-linear-to-r from-cyan-200 to-blue-300 p-7 rounded-2xl">
        <legend className="fieldset-legend">Name</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter your name..."
        />

        <legend className="fieldset-legend">Email</legend>
        <input
          type="email"
          className="input w-full"
          placeholder="Enter your email..."
        />

        <legend className="fieldset-legend">PhotoURL</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter your photourl..."
        />

        <legend className="fieldset-legend">Password</legend>
        <input
          type="password"
          className="input validator w-full"
          required
          placeholder="Password"
          minlength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
        <p className="validator-hint">
          Must be more than 6 characters, including uppercase and lowercase letters.
          
        </p>

        <button className="btn bg-purple-500 text-white w-full mt-4">Register Now</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
