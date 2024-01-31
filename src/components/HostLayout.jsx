import React from "react";
import { Link, Outlet } from "react-router-dom";
import Dashborad from "../pages/Host/Dashborad";


function HostLayout() {
   
  return (
    <>
    <nav className="px-4">
        <ul className="flex item-center">
          <li className="px-2 font-[500] text-clr-promary-2 hover:text-black hover:underline">
            <Link to="/host">Dashborad</Link>
          </li>
          <li className="px-2 font-[500] text-clr-promary-2 hover:text-black hover:underline">
            <Link to="income">Income</Link>
          </li>
          <li className="px-2 font-[500] text-clr-promary-2 hover:text-black hover:underline">
            <Link to="vans">Vans</Link>
          </li>
          <li className="px-2 font-[500] text-clr-promary-2 hover:text-black hover:underline">
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default HostLayout