import React, { useState, useEffect } from "react";

export const PlanetsResident = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/people/";

  const currentUrl = window.location.href;
  let splitUrl = currentUrl.split("/");
  const id = splitUrl[splitUrl.length - 1];

  const urlToFetch = url + id + "/";
  useEffect(() => {
      fetch(urlToFetch)
      .then(res => res.json())
      .then((res) => {
        setFetchData(res);
        setIsLoaded(true);
        console.log("fetchData => " , res)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (isLoaded) {
    console.log(fetchData);

    return (
      <div>
        <p>Coucou</p>
        {
          <>
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
          </>
        }
      </div>
    );
  } else {
    return <div>Waiting...</div>;
  }
};
