import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import avatar from "../../../assets/images/avatar/avatar.jpg"
import logo from "../../../assets/images/logo/logo.png"
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((res) => {})
      .then((err) => console.error(err));
  };

  const menuItems = (
    <>
      <li className="font-bold">
        <Link to={`/`}>Home</Link>
      </li>
      <li className="font-bold">
        <Link to={`/blogs`}>Blogs</Link>
      </li>
      <li className="font-bold">
        <Link to={`/about`}>About</Link>
      </li>
      <li className="font-bold">
        <Link to={`/dashboard`}>DashBoard</Link>
      </li>
      {user?.email ? (
        <li className="font-bold">
          <button onClick={handleLogOut}>logout</button>
        </li>
      ) : (
        <li className="font-bold">
          <Link to={`/login`}>Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start relative">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl absolute right-[230px] -top-[65px]">
          <img src={logo} className="w-40" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
          <div className="avatar">
            <div className="w-8 mr-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatar} alt="" />
            </div>
          </div>
      </div>
      <label
        tabIndex={2}
        htmlFor="dashboardDrawer"
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
