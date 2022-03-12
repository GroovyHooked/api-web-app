import React, { useState, useEffect } from "react";

export const Starships = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const starshipsUrl = "https://swapi.dev/api/starships/";
  

  useEffect(() => {
    fetch(starshipsUrl)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setFetchData(res.results);
        console.log("fetchData1 => ", res.results);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (isLoaded) {
    
    return fetchData.map((starship, i) => {
      return (
        <div key={i}>
          <h4>{starship.name}</h4>
          <p>Model: {starship.model}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Passengers: {starship.passengers}</p>
          <p>Starship class: {starship.starship_class}</p>
          <div>
            <h5>Films:</h5>
            {
              <ul>
                {starship.films.map((res, i) => {
                  let splitUrl = res.split("/");
                  let id = splitUrl[splitUrl.length - 2];
                  return <li key={i}><a href={"/film/" + id}>Film: {id}</a></li>;

                })}
              </ul>
            }
          </div>
        </div>
      );
    });
  } else {
    return <div>Waiting...</div>;
  }
};
