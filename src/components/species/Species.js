import React, { useState, useMemo } from "react";

export const Species = ({ residentArray }) => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/species/";

  const fetchSpecies = async () => {
    const response = await fetch(url);
    const data = await response.json();
    try {
      setFetchData(data);
      setIsLoaded(true);
    } catch (err) {
      console.error(err);
    }
  };

  useMemo(() => {
    fetchSpecies();
  }, []);

  const Species = () => {
    return fetchData.results.map((res, i) => {
      return (
        <div key={i} className="thumbnail">
          <h4>{res.name}</h4>
          <p>classification: {res.classification}</p>
          <p>designation: {res.designation}</p>
          <p>average_height: {res.average_height}</p>
          <p>language: {res.language}</p>
          <div>
            <h5>people:</h5>
            <ul>
              {res.people.map((character, i) => {
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
        </div>
      );
    });
  };

  if (isLoaded) {
    return (
      <>
        <h3>Species</h3>
        <div className="container">
          <Species />
        </div>
      </>
    );
  } else {
    return <div>Waiting...</div>;
  }
};
