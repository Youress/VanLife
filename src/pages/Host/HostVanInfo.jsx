import React from "react";
import { useOutletContext } from "react-router";

const HostVanInfo = () => {
  const currentVan = useOutletContext();
  console.log(currentVan, "hello")

  return (
    <div>
      
    </div>
  );
};

export default HostVanInfo;
