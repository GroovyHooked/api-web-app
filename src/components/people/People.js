import React, { useState, useEffect } from "react";
import axios from "axios";

export const People = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/people/";

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
  }, []);

  if (isLoaded) {
   
    let i = 0;
    return fetchData.results.map((res) => {
      return (
        <div key={i++}>
          <h4>{res.name}</h4>
          <p>Gender: {res.gender}</p>
          <p>Hair color: {res.hair_color}</p>
          <p>Eye color: {res.eye_color}</p>
          <p>Height: {res.height}</p>
          <ul>
            {res.films.map((film, i) => {
              return <li key={i}>{film}</li>;
            })}
          </ul>
        </div>
      );
    });
  } else {
    return <div>Waiting...</div>;
  }
};
