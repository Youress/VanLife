import React from "react";
import { useLocation, useLoaderData } from "react-router-dom";
import { Link  } from "react-router-dom";
import { getVans } from "../../api";

export function loader({params}){
  console.log(params)
  return getVans(params.id)
}

const VanDetails = () => {

  const Vans  = useLoaderData()
  const location = useLocation();

  const search = location.state?.search || ""


  const { name, type, description, imageUrl, price } = Vans;


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


export default VanDetails;
