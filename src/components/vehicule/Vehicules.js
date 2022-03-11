import React, { useState, useEffect } from "react";

export const Vehicules = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/vehicles/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        setFetchData(resp);
        console.log("resp => ", resp);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (isLoaded) {
    console.log(fetchData.results);
    let i = 1;
    return fetchData.results.map((res) => {
      return (
        <div key={i++}>
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
                    <a href={"/resident/" + id}>pilot {i + 1}</a>
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
