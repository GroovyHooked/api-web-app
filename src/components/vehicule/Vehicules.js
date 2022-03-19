import React, { useState, useEffect } from "react";

export const Vehicules = ({ residentArray }) => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/vehicles/";

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
      return (
        <div key={i} className="thumbnail">
          <h4>{res.name}</h4>
          <p>episode_id: {res.manufacturer}</p>
          <p>opening_crawl: {res.model}</p>
          <p>director: {res.director}</p>
          <p>producer: {res.passengers}</p>
          <div>
            <h5>pilots:</h5>
            <ul>
              {res.pilots.map((pilot, i) => {
                let splitUrl = pilot.split("/");
                let id = splitUrl[splitUrl.length - 2];
                return (
                  <li key={i}>
                    <a href={"/resident/" + id}>{residentArray[id - 1]}∑</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    });
  }
  if (isLoaded) {
    return (
      <>
        <h3>Vehicules</h3>
        <div className="container">
          <VehiculesComp />
        </div>
      </>
    );
    
  } else {
    return <div>Waiting...</div>;
  }
};
