import React, { useState, useMemo } from "react";

export const Film = ({residentArray}) => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/films/";

  const fetchMovieData = async () => {
    const currentUrl = window.location.href;
    let splitUrl = currentUrl.split("/");
    const id = splitUrl[splitUrl.length - 1];
    const urlToFetch = url + id + "/";

    const response = await fetch(urlToFetch)
    const data = await response.json();
    try {
      setFetchData(data);
      setIsLoaded(true);
      console.log("Film::fetchData => ", data);
    } catch (err) {console.error(err)}
  }

  useMemo(() => {
    fetchMovieData()
  }, []);


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
                  <a href={"/resident/" + id}>{residentArray[id-1]}</a>
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
