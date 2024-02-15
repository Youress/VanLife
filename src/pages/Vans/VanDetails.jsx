import React, { useState, useEffect } from "react";
import { useParams ,useLocation } from "react-router-dom";
import { Link  } from "react-router-dom";

const VanDetails = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const search = location.state?.search || ""
  const fetchVanDetails = async () => {
    // Use 'id' to fetch data (e.g., from an API)
    const response = await fetch(`/api/vans/${id}`);
    const data = await response.json();
    setData(data.vans);
    setLoading(false);
    // Handle the data as needed
  };

  useEffect(() => {
    fetchVanDetails();
  },[location]);

  const { name, type, description, imageUrl, price } = data;

  if (loading) {
    return <h1 className="font-bold text-3xl my-4 p-6">loading</h1>;
  } else {
    return (
      <div className="p-6">
        <Link className="back-button" relative="path" to={`..?${search}`}>
          ← <span>Back to all vans</span>
        </Link>
        <div className="py-6">
          <div className="flex flex-col">
            <img className="" src={imageUrl} alt={name} />
            <i className="van-type simple selected w-fit  my-4">{name}</i>
            <h2 className="font-bold my-2 uppercase text-[24px]">{type}</h2>
            <p className="font-semibold">
              <span>${price}</span>/day
            </p>
            <p className="my-4">{description}</p>
              <button className="link-button text-white  bg-[#FF8C38]">
                Rent this van
              </button>
          </div>
        </div>
      </div>
    );
  }
};

export default VanDetails;
