import React, { useState, useEffect } from "react";

export const Menu = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/";
  let arr = [];

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
        console.log("data => " + data);
        for (const [key, value] of Object.entries(data)) {
          // eslint-disable-next-line no-useless-concat
          arr.push(["name" + ":" + key + "," + "url" + ":" + value]);
        }
        setFetchData(data);

        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log("arr => " + arr);
  console.log("fetchData => " + Object.entries(fetchData));
  const iterate = () => {
    for (const [key, value] of Object.entries(fetchData)) {
      return (
        <p>
          {key}: {value}
        </p>
      );
    }
  };

  return <div id="myId">{isLoaded ? iterate() : null}</div>;
};

/*
const getKey = (object) => {
    return Object.keys(object);
  };*/
