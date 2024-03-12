import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams ,useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader(){
  return getVans()
}
const Vans = () => {
  const Vans  = useLoaderData()
  // const [Vans, setVans] = useState([]);
  const [newData, setNewData] = useState(Vans);
  const navigate = useNavigate();
  

  const [searchParams , setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");


  const typeData = [...new Set(newData.map((item) => item.type))];

  const filterItems = (type) => {
    if(type === "all"){
      return navigate('/vans')
    }
    navigate(`/vans?type=${type}`);
  };

  
  const displayVans = typeFilter ? Vans.filter((van) => van.type === typeFilter) : Vans

  

  const vanElement = displayVans.map((van) => (
    <div className="van-tile" key={van.id}>
      <Link
        to={`${van.id}`}  state={{search : searchParams.toString()}}
        aria-label={`View details for ${van.name},priced at $${van.price} per day`}
      >
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
          {typeData.map((type, index) => {
            // const itemCount = newData.filter((item) => item.type === type)
            return (
              <button
                onClick={() => filterItems(type)}
                key={index}
                className={
                  `van-type ${type} ${typeFilter === `${type}` ? "selected" : ""}`
              }
              >
                {type}
              </button>
            );
          })}
        </div>
        <div>
          <button
            onClick={() => filterItems("all")}
            className="underline text-[#4D4D4D]"
          >
            clear filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2  items-center gap-8 mt-14">
        {vanElement}
      </div>
    </div>
  );
};

export default Vans;
