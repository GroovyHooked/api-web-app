import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Menu.css";

export const Menu = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://swapi.dev/api/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        setFetchData(resp);
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
  console.log(arr);
  let i = 0;
  let y = 100;
  if (isLoaded) {
    return (
      <div className="menu">
        {arr.map((cat) => {
          return (
            <>
              <div key={i++}>
                <Link key={y++} to={cat}>
                  {cat}
                </Link>
              </div>
            </>
          );
        })}
      </div>
    );
  } else {
    return <div>Waiting</div>;
  }
};
