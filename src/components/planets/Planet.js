import React, { useState, useEffect } from "react";

export const Planet = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const planets = "https://swapi.dev/api/planets/";

  const currentUrl = window.location.href;
  let splitUrl = currentUrl.split("/");
  const id = splitUrl[splitUrl.length - 1];
  console.log(id);
  const urlToFetch = planets + id + "/";

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
    //console.log(fetchData);
    return (
      <div>
        <h4>Planet: {fetchData.name}</h4>
        <p>Rotation peridod: {fetchData.rotation_period}</p>
        <p>Diameter: {fetchData.diameter}</p>
        <div>
          <h5>Résidents:</h5>
          <ul>
            {fetchData.residents?.map((resident, i) => {
              let splitUrl = resident.split("/");
              let id = splitUrl[splitUrl.length - 2];
              return (
                <li key={i}>
                  <a href={"/resident/" + id}>Resident {i + 1}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>Waiting...</div>;
  }
};
