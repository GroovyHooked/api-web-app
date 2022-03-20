import React, { useState, useEffect } from "react";

export const Vehicles = ({ residentArray }) => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/vehicles/";
  console.log("Vehicules::residentArray => ", residentArray);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        setFetchData(resp);
        console.log("Vehicules::resp => ", resp);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const VehiculesComp = () => {
    return fetchData.results.map((res, i) => {
      console.log(res.pilots.length)
      return (
        <div key={i} className="thumbnail">
          <h4>{res.name}</h4>
          <p>manufacturer: {res.manufacturer}</p>
          <p>model: {res.model}</p>
          <p>cargo_capacity: {res.cargo_capacity}</p>
          <p>passengers: {res.passengers}</p>
          <div>
            <h5>pilots:</h5>
            <ul>
              {res.pilots.length > 0 ? res.pilots.map((pilot, i) => {
                let splitUrl = pilot.split("/");
                let id = splitUrl[splitUrl.length - 2];
                return (
                  <li key={i}>
                    <a href={"/resident/" + id}>{residentArray[id - 1]}</a>
                  </li>
                );
              }): <h3>Aucun pilote</h3>}
            </ul>
          </div>
        </div>
      );
    });
  }
  if (isLoaded) {
    return (
      <>
        <h3>Vehicles</h3>
        <div className="container">
          <VehiculesComp />
        </div>
      </>
    );
    
  } else {
    return <div>Waiting...</div>;
  }
};
