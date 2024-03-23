import React, { useState, useEffect } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader (){
  await requireAuth()
  // return getHostVans()
}


function VansHost() {
  const data = useLoaderData()
  // const [data, setData] = useState([]);



    return (
      <section className="py-[80px] mx-auto px-8">
        <div>
          <h1 className="font-bold text-4xl mb-3">Your Listed Vans</h1>
        </div>
        {data.map((item) => {
          return (
            <NavLink key={item.id} to={`${item.id}`}>
              <div  className="bg-white my-[15px] rounded-md ">
                <div className="p-4 flex items-center gap-10">
                  <img
                    className="w-[150px] rounded-md"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                  <div>
                    <h3 className="text-[20px] font-semibold">{item.name}</h3>
                    <p className="text-[#4D4D4D] font-medium">
                      ${item.price}/day
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </section>
    );
  }


export default VansHost;
