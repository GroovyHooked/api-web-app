/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";

export const Pokemon = () => {
  const [pokArr, setPokArr] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://pokedex-jgabriele.vercel.app/pokemons.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPokArr(res);
        setIsLoaded(true);
        console.log(pokArr);
      })
      .catch((err) => console.error(err));
  });

  const elements = (type) => {
    if (type === "poison") return <div className="poison">Poison</div>;
    if (type === "grass") return <div className="grass">Herbe</div>;
    if (type === "fire") return <div className="fire">Feu</div>;
    if (type === "rock") return <div className="rock">Rock</div>;
    if (type === "ground") return <div className="ground">Ground</div>;
    if (type === "normal") return <div className="normal">Normal</div>;
    if (type === "psychic") return <div className="psychic">Psychic</div>;
    if (type === "ice") return <div className="ice">Ice</div>;
    if (type === "water") return <div className="water">water</div>;
  };

  if (isLoaded) {
    return pokArr.map((pokemon, index) => {
      return (
        <div key={index}>
          <h4>{pokemon.names.fr}</h4>
          <img src={pokemon.image} alt={"pokemon " + pokemon.names.fr} />
          <div>
            {pokemon.types.map((type, index) => {
              return elements(type);
            })}
          </div>
        </div>
      );
    });
  } else {
    return <div>Pokemon</div>;
  }
};
