import React, { useState, useEffect } from "react";
import axios from "axios";

export const Planets = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/planets/";
  const peopleUrl = "https://swapi.dev/api/people/";

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setFetchData(resp.data);
        console.log("fetchData1 => ", resp.data);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  let arr = [];
   const getName = (url, id) => {
    axios.get(url + id + '/')
          .then((res) => {
            console.log(arr)
            arr.push({name: res.data.name}) 
          }).catch((err) => {
            console.log(err);
          })
          
  }


  if (isLoaded ) {
    
    return fetchData.results.map((planet, i) => {
      return (
        <div key={i++}>
          <h4>{planet.name}</h4>
          <p>Rotation period: {planet.rotation_period}</p>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Population: {planet.population}</p>
          <div>
            <h5>Résidents:</h5>
            {<ul>
              {planet.residents.map((res, i) => {
                let splitUrl = res.split("/");
                let id = splitUrl[splitUrl.length - 2];
                return (
                  <li key={i}>
                    <a href={"/resident/" + (id)}>Résient {i+1}</a>
                  </li>
                );
              })}
            </ul>}
          </div>
        </div>
      );
    });
  } else {
    return <div>Waiting...</div>;
  }
};
