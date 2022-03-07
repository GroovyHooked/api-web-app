import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/";

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
  }, [url]);

  let arr = [];

  const iterate = () => {
    for (const [key] of Object.entries(fetchData)) {
      arr.push(key);
    }
  };

  iterate();

  let i = 0;
  if (isLoaded) {
    return (
      <>
        <div key={i++}>
          <Link to="/people">People</Link>
        </div>
        <div key={i++}>
          <Link to="/planets">Planets</Link>
        </div>
      </>
    );
  } else {
    return <div>Waiting</div>;
  }
};
