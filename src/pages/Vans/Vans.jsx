
import React, { useEffect, useState ,createContext } from "react";
import { Link } from "react-router-dom";


const Vans = () => {
  const [data, setData] = useState([]);
  const [newData ,setNewData] =  useState([])

  const fetchVans = async () => {
    // Use 'id' to fetch data (e.g., from an API)
    const response = await fetch("/api/vans");
    const data = await response.json();
    setData(data.vans);
    setNewData(data.vans)
    console.log("Van details:", response);
    // Handle the data as needed
  };


  const typeData = [...new Set(newData.map((item) => item.type))];
  const filterItems = (type) => {
    if(type === 'all'){
      return setData(newData)
    }
    const itemTypes = newData.filter((item) => item.type === type);
    setData(itemTypes);
  };

  useEffect(() => {
    fetchVans();
  }, []);

  const vanElement = data.map((van) => (
    <div className="van-tile" key={van.id}>
      <Link
        to={`/vans/${van.id}`}
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
            return (
              <button onClick={()=>filterItems(type)} key={index} className={`van-type ${type} filter-btn`}>{type}</button>
            );
          })}         
        </div>
        <div>
          <button onClick={()=>filterItems('all')} className="underline text-[#4D4D4D]">clear filter</button>
        </div>
      </div>
      <div className="grid grid-cols-2  items-center gap-8 mt-14">
        {vanElement}
      </div>
    </div>
  );
};

export default Vans;
