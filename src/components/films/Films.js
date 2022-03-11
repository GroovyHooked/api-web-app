import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Character } from "../character/Character";

export const Films = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/films/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        setFetchData(resp);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (isLoaded) {
    /*fetchData.results.map((res) => {
        return console.log(
          res.films.map((f) => {
            return console.log(f);
          })
        );
      });*/

    console.log(fetchData.results);
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
                    <a href={"/resident/" + id}>Character {i + 1}</a>
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
