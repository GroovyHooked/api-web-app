import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Peep } from "./Peep";

export const Species = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/species/";

  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then((resp) => {
        setFetchData(resp);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (isLoaded) {
    let i = 1;
    return fetchData.results.map((res) => {
      return (
        <div key={i++}>
          <h4>{res.name}</h4>
          <p>classification: {res.classification}</p>
          <p>designation: {res.designation}</p>
          <p>average_height: {res.average_height}</p>
          <p>language: {res.language}</p>
          <div>
            <h5>people:</h5>
            <ul>
              {res.people.map((p, i) => {
                return (
                  <li key={i}>
                    <Link to={"/people/" + i} children={<Peep id="" />}>
                      {p}
                    </Link>
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


  