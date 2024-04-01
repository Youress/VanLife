import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black",
  };
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
}

  return (
    <>
      <nav className="px-4 flex justify-between">
        <ul className="flex item-center">
          <li className="px-2 font-[500] text-clr-promary-2 hover:text-black hover:underline">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="/host"
              end
            >
              Dashborad
            </NavLink>
          </li>
          <li className="px-2 font-[500] text-clr-promary-2 hover:text-black hover:underline">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="income"
            >
              Income
            </NavLink>
          </li>
          <li className="px-2 font-[500] text-clr-promary-2 hover:text-black hover:underline">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="vans"
            >
              Vans
            </NavLink>
          </li>
          <li className="px-2 font-[500] text-clr-promary-2 hover:text-black hover:underline">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to="reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <div onClick={fakeLogOut}>
          <span className="bg-slate-300 p-2 rounded-md cursor-pointer">Log Out</span>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
