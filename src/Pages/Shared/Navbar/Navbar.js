import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import avatar from "../../../assets/images/avatar/avatar.jpg";
import logo from "../../../assets/images/logo/logo.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
      <div className="flex items-center justify-center">
        <input type="search" placeholder="search products" name="" id="" className="input w-80 input-bordered focus:outline-none" />
        <button className="btn btn-error ml-2">search</button>
      </div>
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
        <Link to={`/`} className="btn btn-ghost normal-case text-xl absolute right-[230px] -top-[65px]">
          <img src={logo} className="w-40" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className={`flex items-center jusitfy-evenly`}>
                <div className="avatar">
                  <div className="w-8 mr-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={avatar} alt="" />
                  </div>
                </div>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="signup"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        signed in as <strong>{user.email && user.email}</strong>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/dashboard"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Dashboard
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/signup"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account Settings
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="signup"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        onClick={handleLogOut}
                        to="/signup"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Sign out
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1"></div>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <Link to={`/login`}><button className="btn btn-primary btn-sm mr-10"  >log in</button></Link>
        )}
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
