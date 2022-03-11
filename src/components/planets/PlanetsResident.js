import React, { useState, useEffect } from "react";

export const PlanetsResident = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const residents = "https://swapi.dev/api/people/";
  const movies = "https://swapi.dev/api/films/";

  const currentUrl = window.location.href;
  let splitUrl = currentUrl.split("/");
  const id = splitUrl[splitUrl.length - 1];

  const urlToFetch = residents + id + "/";
  useEffect(() => {
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((res) => {
        setFetchData(res);
        setIsLoaded(true);
        console.log("fetchData => ", res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (isLoaded) {
    console.log(fetchData);
    /**
     * TODO: Find a way to show error messages when data isn't available (vehicule)
     */
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
                  return (
                    <li key={i}>
                      <a href={"/movie/"}>{film}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h5>Véhicules:</h5>
              <ul>
                {fetchData.vehicules !== []
                  ? fetchData.vehicles.map?.((vehicle, i) => (
                      <li key={i}>{vehicle}</li>
                    ))
                  : "<p>This resident doesn't own a vehicule</p>"}
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
