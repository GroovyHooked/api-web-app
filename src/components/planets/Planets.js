import React, { useState, useEffect } from "react";

export const Planets = ({ residentArray }) => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  console.log("Planets::residentArrayProp => ", residentArray);
  const url = "https://swapi.dev/api/planets/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setFetchData(res.results);
        setIsLoaded(true);
        console.log("Planets::res.results => ",res.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (isLoaded) {
    return fetchData.map((planet, i) => {
      return (
        <div key={i++}>
          <h4>{planet.name}</h4>
          <p>Rotation period: {planet.rotation_period}</p>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Population: {planet.population}</p>
          <div>
            <h5>Résidents:</h5>
            {
              <ul>
                {planet.residents.map((res, i) => {
                  let splitUrl = res.split("/");
                  let id = splitUrl[splitUrl.length - 2];
                  return (
                    <li key={i}>
                      <a href={"/resident/" + id}>{residentArray[id - 1]}</a>
                    </li>
                  );
                })}
              </ul>
            }
          </div>
        </div>
      );
    });
  } else {
    return <div>Waiting...</div>;
  }
};
