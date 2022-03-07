import React, { useState, useEffect } from "react";
import axios from "axios";

export const Planets = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/planets/";

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setFetchData(resp.data);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [url]);

  if (isLoaded) {
    fetchData.results.map((res) => {
      return console.log(
        res.films.map((f) => {
          return console.log(f);
        })
      );
    });

    console.log(fetchData.results);
    let i = 0;
    return fetchData.results.map((res) => {
      return (
        <div key={i++}>
          <h4>{res.name}</h4>
          <p>Rotation period: {res.rotation_period}</p>
          <p>Climate: {res.climate}</p>
          <p>Terrain: {res.terrain}</p>
          <p>Population: {res.population}</p>
          <ul>
            {res.residents.map((resident, i) => {
              return <li key={i}>{resident}</li>;
            })}
          </ul>
        </div>
      );
    });
  } else {
    return <div>Waiting...</div>;
  }
};
