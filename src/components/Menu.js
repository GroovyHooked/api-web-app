import React, { useState, useEffect } from "react";
import axios from "axios";
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

  console.log("fetchData => " + fetchData);
  let arr = [];

  const iterate = () => {
    for (const [key, value] of Object.entries(fetchData)) {
      arr.push(key, value);
    }
  };

  iterate();

  if (isLoaded) {
    return arr.map((cat, i) => {
      console.log(cat);
      return (
        <div key={i}>
          <p>{cat}</p>
          <p>
            <a href={'"' + cat.i + '"'}>{cat.i}</a>
          </p>
        </div>
      );
    });
  } else {
    return <div>Waiting</div>;
  }
};
