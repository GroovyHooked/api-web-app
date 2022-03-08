import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PlanetsResident } from "./PlanetsResident";
import axios from "axios";

export const Planets = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchData1, setFetchData1] = useState({});
  const [isLoaded1, setIsLoaded1] = useState(false);

  const url = "https://swapi.dev/api/planets/";
  const peopleUrl = "https://swapi.dev/api/people/";

  axios.all(
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
    }, []),

    useEffect(() => {
      axios
        .get(peopleUrl)
        .then((resp) => {
          setFetchData1(resp.data);
          setIsLoaded1(true);
          console.log(resp.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [])
  );

  if (isLoaded && isLoaded1) {
    return fetchData.results.map((res, i) => {
      return (
        <div key={i++}>
          <h4>{res.name}</h4>
          <p>Rotation period: {res.rotation_period}</p>
          <p>Climate: {res.climate}</p>
          <p>Terrain: {res.terrain}</p>
          <p>Population: {res.population}</p>
          <div>
            <h5>Résidents:</h5>
            <ul>
              {fetchData1.results.map((res, i) => {
                return (
                  <li key={i}>
                    <a href={"/resident/" + (i + 1)}>{res.name}</a>
                    {res.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    });
  } else {
    return <div>Waiting...</div>;
  }
};
