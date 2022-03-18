import React, { useState, useEffect } from "react";

export const Planet = ({ residentArray }) => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchPlanets = async () => {
    const planets = "https://swapi.dev/api/planets/";
  
    const currentUrl = window.location.href;
    let splitUrl = currentUrl.split("/");
    const id = splitUrl[splitUrl.length - 1];
    const urlToFetch = planets + id + "/";

    const response = await fetch(urlToFetch)
    const data = await response.json();
    try {
      setFetchData(data);
        setIsLoaded(true);
        console.log("Planet::fetchData => ", data);
    } catch (err) {console.error(err)}

  }

  useEffect(() => {
    fetchPlanets()
  }, []);

  if (isLoaded) {
    return (
      <div>
        <h4>Planet: {fetchData.name}</h4>
        <p>Rotation peridod: {fetchData.rotation_period}</p>
        <p>Diameter: {fetchData.diameter}</p>
        <div>
          <h5>Résidents:</h5>
          <ul>
            {fetchData.residents?.map((resident, i) => {
              let splitUrl = resident.split("/");
              let id = splitUrl[splitUrl.length - 2];
              return (
                <li key={i}>
                  <a href={"/resident/" + id}>{residentArray[id - 1]}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>Waiting...</div>;
  }
};
