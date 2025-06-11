import React, { use, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
      });
  }, [user]);

  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/services"}>Services</NavLink>
    </>
  );

  const loggedInLinks = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/services"}>Services</NavLink>
      <NavLink to={"/addservices"}>Add Service</NavLink>
      <NavLink to={"/myservices"}>My Services</NavLink>
      <NavLink to={"/myreviews"}>My Reviews</NavLink>
    </>
  );

  const handleLogOut = () => {
    logOutUser().then(() => {
      Swal.fire({
        title: "You are Logged Out!",
        icon: "success",
        draggable: true,
      });
    });
  };
  return (
    <div className="navbar bg-slate-700 text-white shadow-lg sticky top-0 z-40">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* Mobile */}
              {user ? loggedInLinks : links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-7 lg:w-10" />
            <Link to="/" className="text-xl text-secondary lg:text-3xl">
              Rate<span className="font-extralight text-yellow-500">Wise</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-base">
            {/* desktop */}
            {user ? loggedInLinks : links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex gap-4">
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                    <img src={currentUser?.photourl} />
                  </div>
                </div>

                <button onClick={handleLogOut} className="btn">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div>
              <Link to="/login" className="btn mr-3">
                Login
              </Link>
              <Link to="/registration" className="btn">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
