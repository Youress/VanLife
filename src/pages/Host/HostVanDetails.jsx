import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Outlet, useParams } from "react-router";

const HostVanDetails = () => {
  const [currentVan, setCurrentVan] = useState([]);
  const { id } = useParams();

  const fetchHostVanDetails = async () => {
    try {
      const response = await fetch(`/api/host/vans/${id}`);
      const responseData = await response.json();
      // Assuming responseData is an object with a 'vans' property
      setCurrentVan(responseData.vans);
    } catch (error) {
      console.error("Error fetching van details:", error);
    }
  };
  useEffect(() => {
    fetchHostVanDetails();
  }, []);

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
      {currentVan.map((item) => {
        return (
          <div key={item.id} className="py-6 ">
            <div className="p-8 bg-white rounded-md">
              <div className="flex items-center gap-6">
                <img
                  className="w-[180px] rounded-md"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div>
                  <h2 className="van-type simple selected w-fit  my-4">
                    {item.type}
                  </h2>
                  <p className="font-bold my-2 text-[#161616] text-[24px]">
                    {item.name}
                  </p>

                  <p>
                    <span className="font-semibold">${item.price}</span>/day
                  </p>
                </div>
              </div>
              <div className="py-4">
        <nav className="">
          <ul className="flex item-center gap-3">
            <li className=" font-[500] text-clr-promary-2 hover:text-black hover:underline">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to='.'
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
              <Outlet context={currentVan}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HostVanDetails;
