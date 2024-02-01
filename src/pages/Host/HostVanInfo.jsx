import React from "react";
import { useOutletContext } from "react-router";

const HostVanInfo = () => {
  const [van, setvan] = useOutletContext([]);

  const { name, description, type } = van;
  return (
    <div>
      <p>
        <span className="font-bold mr-1">Name:</span>
        {name}
      </p>
      <p>
        <span className="font-bold mr-1">Category:</span>
        {type}
      </p>
      <p>
        <span className="font-bold mr-1">Description:</span>
        {description}
      </p>
      <p>
        <span className="font-bold mr-1">Visibility:</span>Public
      </p>
    </div>
  );
};

export default HostVanInfo;
