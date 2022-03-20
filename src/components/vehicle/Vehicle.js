import React from "react";

export const Vehicle = ({ vehicleList }) => {
  const currentUrl = window.location.href;
  let splitUrl = currentUrl.split("/");
  const id = splitUrl[splitUrl.length - 1];

  return (
    <div>
      <h4>Vehicle: {vehicleList[id]}</h4>
    </div>
  );
};
