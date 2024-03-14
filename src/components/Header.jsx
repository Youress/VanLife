import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "../assests/images/avatar-icon.png"

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <header className=" mx-auto bg-clr-primary-1">
        <nav className="  px-4 flex justify-between items-center h-[110px]">
          <Link to="/" className="text-[26px] font-bold">
            #VANLIFE
          </Link>
          <ul className="flex item-center">
            <li className="px-2 font-semibold text-clr-promary-2 hover:text-black hover:underline">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="px-2 font-semibold text-clr-promary-2 hover:text-black">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/vans"
              >
                Vans
              </NavLink>
            </li>
            <li className="px-2 font-semibold text-clr-promary-2 hover:text-black">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to="/host"
              >
                Host
              </NavLink>
            </li>
            <li className="px-2 font-semibold text-clr-promary-2 hover:text-black">
              <NavLink to="/login">
                <img
                  alt="login"
                  src={imageUrl}
                  className="w-6"
                />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
