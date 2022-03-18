import React, { useState, useMemo } from "react";

export const Starships = ({ movieList }) => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const starshipsUrl = "https://swapi.dev/api/starships/";
const fetchStarShips = async () => {
  const response = await fetch(starshipsUrl);
  const data = await response.json();
  try{
    setFetchData(data.results);
    console.log("Starships::fetchData => ", data.results);
    setIsLoaded(true);
  } catch(err) { console.error(err) }
}

  useMemo(() => {
    fetchStarShips()
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
                  return (
                    <li key={i}>
                      <a href={"/film/" + id}>{movieList[id - 1]}</a>
                    </li>
                  );
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
