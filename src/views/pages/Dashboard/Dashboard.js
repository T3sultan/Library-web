import { Icon } from "@iconify/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold  text-red-400 ">Dashboard</h2>
          <p className="mr-12 font-bold ">Tipu </p>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
