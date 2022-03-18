import React, { useState, useMemo } from "react";

export const Films = ({ residentArray }) => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/films/";

  const fetchMovies = async () => {
    const response = await fetch(url);
    const data = await response.json();
    try {
      setFetchData(data);
      setIsLoaded(true);
    } catch (err) { 
      console.error(err)
    }
  }

  useMemo(() => {
    fetchMovies()
  }, []);

  if (isLoaded) {
    console.log( "Films::fetchData.results => " ,fetchData.results);
    let i = 1;
    return fetchData.results.map((res) => {
      return (
        <div key={i++}>
          <h4>{res.title}</h4>
          <p>episode_id: {res.episode_id}</p>
          <p>opening_crawl: {res.opening_crawl}</p>
          <p>director: {res.director}</p>
          <p>producer: {res.producer}</p>
          <div>
            <h5>characters:</h5>
            <ul>
              {res.characters.map((character, i) => {
                let splitUrl = character.split("/");
                let id = splitUrl[splitUrl.length - 2];
                return (
                  <li key={i}>
                    <a href={"/resident/" + id}>{residentArray[id - 1]}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h5>Planets:</h5>
            <ul>
              {res.planets.map((planet, i) => {
                let splitUrl = planet.split("/");
                let id = splitUrl[splitUrl.length - 2];
                return (
                  <li key={i}>
                    <a href={"/planet/" + id}>Planets: {i + 1}</a>
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
