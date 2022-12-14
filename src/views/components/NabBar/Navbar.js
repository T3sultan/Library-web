import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Navbar.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const menuItems = (
    <>
      <li className=" mr-36">
        <Link to="/home" className=" font-bold text-gray-600">
          My Books
        </Link>
      </li>
      <li tabindex="0" className=" mr-20 ">
        <a class="justify-between font-bold text-gray-600">
          Browse
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul class="p-2">
          <li>
            <a>Subject</a>
          </li>
          <li>
            <a>Trending</a>
          </li>
        </ul>
      </li>
      <div className="mr-30">
        <div className="form-control  ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered "
          />
        </div>
      </div>
      <li>
        <Link className="font-bold text-gray-600" to="/login">
          Log In
        </Link>
      </li>{" "}
      <li>
        <Link className="font-bold text-gray-600" to="/signup">
          Sign Up
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar container flex  ">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Icon width="30px" icon="material-symbols:menu" color="gray" />
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-compact dropdown-content mt-3 rounded-box  "
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/home">
          <img
            className=" w-2/6 hidden cursor-pointer sm:flex  "
            src={logo}
            alt=""
          />
        </Link>
      </div>

      <div className="navbar-end  ">
        <div className=" hidden navbar-center lg:flex ">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>

        <label htmlFor="my-drawer-4" tabIndex={1} className="btn btn-ghost">
          <Icon width="30px" icon="material-symbols:menu" color="gray" />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
