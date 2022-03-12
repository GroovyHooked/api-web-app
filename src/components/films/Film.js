import React, { useState, useEffect } from "react";

export const Film = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/films/";

  const currentUrl = window.location.href;
  let splitUrl = currentUrl.split("/");
  const id = splitUrl[splitUrl.length - 1];
  console.log(id);
  const urlToFetch = url + id + "/";

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
  }, [urlToFetch]);

  if (isLoaded) {
    //console.log(fetchData);
    return (
      <div>
        <h4>Titre: {fetchData.title}</h4>
        <p>Episode: {fetchData.episode_id}</p>
        <p>Présentation: {fetchData.opening_crawl}</p>
        <div>
          <h5>Résidents:</h5>
          <ul>
            {fetchData.characters?.map((character, i) => {
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
      </div>
    );
  } else {
    return <div>Waiting...</div>;
  }
};
