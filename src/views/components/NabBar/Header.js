import React from "react";
import "./Header.css";
import donate from "../../../assets/language-icon.svg";
import logo from "../../../assets/mainlogo.svg";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="">
      <div className="navbar bg-gray-700 rounded-sm ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-48" src={logo} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <button className="border flex justify-center items-center gap-2 text-white w-20 mr-6 h-6 rounded-sm">
                  Donate <Icon icon="mdi:cards-heart" color="red" />
                </button>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body"></div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-6 rounded-full">
                <img src={donate} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
