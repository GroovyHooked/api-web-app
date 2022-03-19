import React from "react";

export const Vehicule = ({ vehiculeList }) => {
  const currentUrl = window.location.href;
  let splitUrl = currentUrl.split("/");
  const id = splitUrl[splitUrl.length - 1];

  return (
    <div>
      <h4>Vehicule: {vehiculeList[id]}</h4>
    </div>
  );
};
