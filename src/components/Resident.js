import React, { useState, useEffect } from "react";
import axios from "axios";

export const Resident = ({ id }) => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  debugger;
  const url = "https://swapi.dev/api/people/";

  useEffect(() => {
    axios
      .get(`${url}${id}`)
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

    return (
      <div>
        <h4>{fetchData.name}</h4>
        <p>height: {fetchData.height}</p>
        <p>mass: {fetchData.mass}</p>
        <p>hair_color: {fetchData.hair_color}</p>
        <p>skin_color: {fetchData.skin_color}</p>
        <div>
          <h5>films:</h5>
          <ul>
            {fetchData.films.map((film, i) => {
              return <li key={i}>{film}</li>;
            })}
          </ul>
        </div>
        <div>
          <h5>films:</h5>
          <ul>
            {fetchData.vehicles.map((vehicle, i) => {
              return <li key={i}>{vehicle}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>Waiting...</div>;
  }
};
