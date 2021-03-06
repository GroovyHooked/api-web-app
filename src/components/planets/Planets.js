import React, { useState, useEffect } from "react";

export const Planets = ({ residentArray, refreshResidents }) => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  console.log("Planets::residentArrayProp => ", residentArray.length);
  const url = "https://swapi.dev/api/planets/";

  const fetchPlanetData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    try {
      setFetchData(data.results);
      setIsLoaded(true);
    }
    catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchPlanetData()
  }, []);

const Planets = () => {
  return fetchData.map((planet, i) => {
    return (
      <div key={i} className="thumbnail">
        <h4>{planet.name}</h4>
        <p>Rotation period: {planet.rotation_period}</p>
        <p>Climate: {planet.climate}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Population: {planet.population}</p>
        <div>
          <h5>Résidents:</h5>
          {
            <ul>
              {planet.residents.length > 0 ? planet.residents.map((res, i) => {
                let splitUrl = res.split("/");
                let id = splitUrl[splitUrl.length - 2];
                return (
                  <li key={i}>
                    <a href={"/resident/" + id}>{residentArray[id - 1]}</a>
                  </li>
                );
              }) : <h3>Auncun résident</h3>}
            </ul>
          }
        </div>
      </div>
    );
  });
}

  if (isLoaded) {
    return (
      <>
        <h3>Planets</h3>
        <button onClick={refreshResidents}>refresh</button>
        <div className="container">
          <Planets />
        </div>
      </>
    );
  } else {
    return <div>Waiting...</div>;
  }
};
