import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";



function VansHost() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchHostVans = async () => {
    try {
      const response = await fetch(`/api/host/vans`);
      const responseData = await response.json();

      // Log the response to the console to check its structure
      console.log("API Response:", responseData);

      // Assuming responseData is an object with a 'vans' property
      setData(responseData.vans);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching van details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHostVans();
  }, []);

  if (loading) {
    return <h1 className="font-bold text-3xl">Loading</h1>;
  } else {
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
}

export default VansHost;
