import React, { useState, useEffect } from "react";

export const PlanetsResident = ({ movieList, vehiculeList }) => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchResident = async () => {
    const residents = "https://swapi.dev/api/people/";

    const currentUrl = window.location.href;
    let splitUrl = currentUrl.split("/");
    const id = splitUrl[splitUrl.length - 1];
    const urlToFetch = residents + id + "/";

    const response = await fetch(urlToFetch)
    const data = await response.json();
    try{
       setFetchData(data);
        setIsLoaded(true);
        console.log("PlanetsResident::fetchRes => ", data);
    } catch(e){console.log(e)}
  };
console.log("PlanetsResident::fetchData.vehicles => ", fetchData.vehicles)

  useEffect(() => {
    fetchResident()
  }, []);

  if (isLoaded) {
    /**
     * TODO: Find a way to show error messages when data isn't available (vehicule)
     */
    return (
      <div>
        {
          <>
            <h4>{fetchData.name}</h4>
            <p>height: {fetchData.height ? fetchData.height : null}</p>
            <p>mass: {fetchData.mass}</p>
            <p>hair_color: {fetchData.hair_color}</p>
            <p>
              skin_color: {fetchData.skin_color ? fetchData.skin_color : null}
            </p>
            <div>
              <h5>films:</h5>
              <ul>
                {fetchData.films.map((film, i) => {
                  let splitUrl = film.split("/");
                  let id = splitUrl[splitUrl.length - 2];
                  //console.log(id);
                  return (
                    <li key={i}>
                      <a href={"/film/" + id}>{movieList[id - 1]}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h5>Véhicules:</h5>

              <ul>
                {fetchData.vehicles.map((vehicle, i) => { 
                   let splitUrl2 = vehicle.split("/");
                   let id = splitUrl2[splitUrl2.length - 2];
                     return (
                      <li key={i}>
                         <a href={"/vehicule/" + id}>{vehiculeList[id]}</a>
                      </li>
                     )
                })
                 }
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
