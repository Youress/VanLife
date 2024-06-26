import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params ,request }) {
  await requireAuth(request);
  return getHostVans(params.id);
}

const HostVanDetails = () => {
  const currentVan = useLoaderData();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black",
  };

  return (
    <div className="p-6">
      <NavLink className="back-button" relative="path" to="..">
        ← <span className="underline">Back to all vans</span>
      </NavLink>

      <div key={currentVan.id} className="py-6 ">
        <div className="p-8 bg-white rounded-md">
          <div className="flex items-center gap-6">
            <img
              className="w-[180px] rounded-md"
              src={currentVan.imageUrl}
              alt={currentVan.name}
            />
            <div>
              <h2 className="van-type simple selected w-fit  my-4">
                {currentVan.type}
              </h2>
              <p className="font-bold my-2 text-[#161616] text-[24px]">
                {currentVan.name}
              </p>

              <p>
                <span className="font-semibold">${currentVan.price}</span>/day
              </p>
            </div>
          </div>
          <div className="py-4">
            <nav className="">
              <ul className="flex item-center gap-3">
                <li className=" font-[500] text-clr-promary-2 hover:text-black hover:underline">
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    to="."
                    end
                  >
                    Details
                  </NavLink>
                </li>
                <li className=" font-[500] text-clr-promary-2 hover:text-black hover:underline">
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    to="pricing"
                  >
                    Prcing
                  </NavLink>
                </li>
                <li className=" font-[500] text-clr-promary-2 hover:text-black hover:underline">
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    to="photos"
                  >
                    Photo
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Outlet context={currentVan} />
        </div>
      </div>
    </div>
  );
};

export default HostVanDetails;
