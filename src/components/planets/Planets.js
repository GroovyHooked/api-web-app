import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PlanetsResident } from "./PlanetsResident";
import axios from "axios";

export const Planets = () => {
  const [fetchData, setFetchData] = useState({});
  const [fetchData1, setFetchData1] = useState({});
  const [fetchData2, setFetchData2] = useState({});
  const [urlRecover, setUrlRecover] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoaded1, setIsLoaded1] = useState(false);

  const url = "https://swapi.dev/api/planets/";
  const peopleUrl = "https://swapi.dev/api/people/";

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setFetchData(resp.data);
        console.log("fetchData1 => ", fetchData1);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(url)
      .then((resp) => {
        setFetchData1(resp.data);
        console.log("fetchData1 => ", fetchData1);
        resp.data.results.forEach(
          (e) =>
            setUrlRecover(urlRecover.push(e.residents)) &&
            console.log(e.residents)
        );

        console.log("urlRecover => ", urlRecover);
        setIsLoaded1(true);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(peopleUrl)
      .then((resp) => {
        setFetchData2(resp.data);
        setIsLoaded1(true);
        console.log("resp.data", resp.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
              {fetchData2.results.map((res, i) => {
                return (
                  <li key={i}>
                    <a href={"/resident/" + (i + 1)}>{res.name}</a>
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
