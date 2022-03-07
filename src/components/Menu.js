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

  let i = 0;
  if (isLoaded) {
    return (
      <>
        <div key={i++}>
          <a href={'"' + fetchData.people + '"'}>
            <h4>People</h4>
          </a>
        </div>
        <div key={i++}>
          <a href={'"' + fetchData.Planets + '"'}>
            <h4>Planets</h4>
          </a>
        </div>
      </>
    );
  } else {
    return <div>Waiting</div>;
  }
};
