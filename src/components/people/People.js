import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/styles/Reset.css"
import "../../assets/styles/People.css"


export const People = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/people/";
  //const films = "https://swapi.dev/api/films/1/";

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setFetchData(resp.data);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const MyPeeps = () => {
    return fetchData.results.map((res, i) => {
      return (
        <div key={i++} className="people">
          <h4>{res.name}</h4>
          <p>Gender: {res.gender}</p>
          <p>Hair color: {res.hair_color}</p>
          <p>Eye color: {res.eye_color}</p>
          <p>Height: {res.height}</p>
          <div>
            <h5>Films:</h5>
            <ul>
            {res.films.map((film, i) => {
               let splitUrl = film.split("/");
               let id = splitUrl[splitUrl.length - 2];
              return <li key={i}><a href={"/film/" + id}>Film: {id}</a></li>;
            })}
          </ul>
          </div>
          
        </div>
      );
    });
  }


  if (isLoaded) {
   
  
    return (
      <>
      <h3>Characters</h3>
       <div className="container">
        
        <MyPeeps />
      </div>
      </>
     
    )
  } else {
    return <div>Waiting...</div>;
  }
};
