import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const RegistrationForm = () => {

  const {createUser} = use(AuthContext);


    const handleRegistration = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photourl = e.target.photourl.value;
        const password = e.target.password.value;

        createUser(email,password)
        .then((userCredentials)=>{
          alert('registerd')

        })
        .catch(()=>{

        })


    }
  return (
    <div>
      <form action="" className="lg:w-2/3 bg-linear-to-r from-cyan-100 to-blue-100 p-7 rounded-2xl" 
      onSubmit={handleRegistration}>
        <legend className="fieldset-legend">Name</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter your name..."
          name="name"
          required
        />

        <legend className="fieldset-legend">Email</legend>
        <input
          type="email"
          className="input w-full"
          placeholder="Enter your email..."
          name="email"
          required
        />

        <legend className="fieldset-legend">PhotoURL</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter your photourl..."
          name="photourl"
          required
        />

        <legend className="fieldset-legend">Password</legend>
        <input
          type="password"
          className="input validator w-full"
          required
          placeholder="Enter your password..."
          minLength="6"
          pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must be more than 6 characters, including lowercase AND uppercase letterS"
          name="password"
        />
        <p className="validator-hint">
          Must be more than 6 characters, including uppercase and lowercase letters.
          
        </p>
         <Link to={'/login'}>Already have an account? <span className="font-semibold underline">Login</span></Link>
        <button type="submit" className="btn bg-purple-500 text-white w-full mt-4 hover:bg-white hover:text-purple-700">Register Now</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
