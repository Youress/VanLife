import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Vans = () => {
  const [data, setData] = useState([]);
  
  const fetchVans = async () => {
    // Use 'id' to fetch data (e.g., from an API)
    const response = await fetch('/api/vans');
    const data = await response.json();
    setData(data.vans)
    console.log("Van details:", response);
    // Handle the data as needed
  };

 useEffect(() => {
    fetchVans();
  }, []);

  const vanElement = data.map((van) => (
    <div className="van-tile" key={van.id}>
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name},priced at $${van.price} per day`}>
        <img className="max-w-[100%]" src={van.imageUrl} alt={van.name} />
        <div className="van-info">
          <h3 className=" my-2 font-bold text-[1.17rem]">{van.name}</h3>
          <p className="my-2">
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected `}>{van.type}</i>
      </Link>
    </div>
  ));
  return (
    <div className="p-8">
      <h1 className="text-[24px] font-bold my-[8px]">
        Explore our van options
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-3">
          <button className="van-type simple filter-btn ">Simple</button>
          <button className="van-type luxury filter-btn">Luxury</button>
          <button className="van-type rugged filter-btn">Rugged</button>
        </div>
        <div>
          <button className="underline text-[#4D4D4D]">clear filter</button>
        </div>
      </div>
      <div className="grid grid-cols-2  items-center gap-8 mt-14">
        {vanElement}
      </div>
    </div>
  );
};

export default Vans;
