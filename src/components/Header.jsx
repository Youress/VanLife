import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
       <header className=" mx-auto bg-clr-primary-1">
      <nav className="  px-4 flex justify-between items-center h-[110px]">
        <Link to='/' className="text-[26px] font-bold">#VANLIFE</Link>
        <ul className="flex item-center">
          <li className="px-2 font-semibold text-clr-promary-2 hover:text-black hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 font-semibold text-clr-promary-2 hover:text-black">
            <Link to="/vans">Vans</Link>
          </li>
          <li className="px-2 font-semibold text-clr-promary-2 hover:text-black">
            <Link to="/host">Host</Link>
          </li>
        </ul>
      </nav>
    </header>
      
    </>
  );
}
