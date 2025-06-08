import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const LoginForm = () => {
  const { logInUser, GoogleLogIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Form Login
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then(() => {
        Swal.fire({
          title: "You are logged In",
          icon: "success",
          draggable: true,
        });

        navigate(location.state ? location.state : '/');
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong email or password ! Try Again.",
        });
      });
  };

  //GoogleLogin
  const handleGoogleLogin = () => {
    GoogleLogIn()
    .then((result)=>{
        const loggedUser = result.user;

        const newUser = {
            name : loggedUser.displayName,
            email: loggedUser.email,
            photourl: loggedUser.photoURL
        }

        // check if user Exits
        fetch(`http://localhost:3000/userlist/${loggedUser.email}`)
        .then(res => res.json())
        .then((data)=>{
          
          if(!data || Object.keys(data).length == 0){
             fetch('http://localhost:3000/users',{
            method:"POST",
            headers:{ 'content-type' : 'application/json'},
            body: JSON.stringify(newUser)

        })
        .then(res => res.json())
        .then (()=>{
            Swal.fire({
            title: "Login Successful!",
            icon: "success",
            draggable: true,
          });

          
        })

          }
          

        })

        navigate(location.state ? location.state : '/');

       
    })
    .catch(()=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong !!",
          footer: '<a href="#">Try Again</a>',
        });
    })
  };
  return (
    <div className="lg:w-2/3 bg-linear-to-r from-cyan-100 to-blue-100 p-7 rounded-2xl">
      <form
        action=""
        className=" "
        onSubmit={handleLogin}
      >
        <legend className="fieldset-legend">Email</legend>
        <input
          type="email"
          className="input w-full"
          placeholder="Enter your email..."
          name="email"
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
          Must be more than 6 characters, including uppercase and lowercase
          letters.
        </p>
        <Link to={"/registration"}>
          Don't have an account?{" "}
          <span className="font-semibold underline">Register</span>
        </Link>
        <button
          type="submit"
          className="btn bg-purple-500 text-white w-full mt-4 hover:bg-white hover:text-purple-700"
        >
          Login Now
        </button>

       
      </form>
       <div className="mt-5">
          <button onClick={handleGoogleLogin} className="btn w-full bg-white text-black border-[#e5e5e5]" >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
    </div>
  );
};

export default LoginForm;
