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

  const Movies = () => {
    return fetchData.results.map((res, i) => {
      return (
        <div key={i} className="movies">
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
  }

  if (isLoaded) {
    console.log( "Films::fetchData.results => " ,fetchData.results);
    return (
      <>
      <h3>Characters</h3>
      <div className="container">
        <Movies />
      </div>
    </>
    )
    
  } else {
    return <div>Waiting...</div>;
  }
};
