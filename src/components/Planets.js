import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Resident } from "./Resident";
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
    let i = 1;
    return fetchData.results.map((res) => {
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
              {res.residents.map((resident, i) => {
                return (
                  <li>
                    <Link to={"/resident/" + i} children={<Resident id={i} />}>
                      {resident}
                    </Link>
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
