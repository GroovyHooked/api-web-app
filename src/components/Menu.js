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
  }, []);

  let arr = [];

  const iterate = () => {
    for (const [key] of Object.entries(fetchData)) {
      arr.push(key);
    }
  };

  iterate();
console.log(arr)
  let i = 0;
  if (isLoaded) {
    return (
    <>
      {arr.map((cat) => {
        return (<><div key={i++}>
          <Link to={cat}>{cat}</Link>
        </div></>)
      })}
        
      </>
    );
  } else {
    return <div>Waiting</div>;
  }
};
