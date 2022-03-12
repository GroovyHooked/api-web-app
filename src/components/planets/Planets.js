import React, { useState, useEffect } from "react";

export const Planets = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/planets/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setFetchData(res.results);
        console.log("fetchData1 => ", res.results);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let arr = [];
  const getName = (url, id) => {
    fetch(url + id + "/")
      .then((res) => res.json())
      .then((res) => {
        console.log(arr);
        arr.push(res.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                      <a href={"/resident/" + id}>Résient {i + 1}</a>
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
