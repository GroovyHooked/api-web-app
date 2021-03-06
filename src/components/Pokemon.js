/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import "../assets/styles/Pokemon.css";

export const Pokemon = () => {

  let initialContainerStyle = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  }

let initialChildStyle = {
 display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "1.5rem",
    height: "200px",
    width: "200px",
    margin: "10px",
    textAlign: "center",
    boxShadow: "5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22)",
    backgroundColor: "#43AA8B"
}
  const [pokArr, setPokArr] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [containerStyle, setContainerStyle] = useState(initialContainerStyle);
  const [cildrenStyle, setcildrenStyle] = useState(initialChildStyle);

  const url = "https://pokedex-jgabriele.vercel.app/pokemons.json";

  const fetchPokemons = async () => {
    const response = await fetch(url)
    const data = await response.json();
    try {
      setPokArr(data);
      setIsLoaded(true);
      console.log(pokArr);
    } catch (err) {console.error(err)}
  }

  useEffect(() => {
    fetchPokemons()
  }, []);

  const elements = (type) => {
    if (type === "poison") return <div className="element poison">Poison</div>;
    if (type === "grass") return <div className="element grass">Herbe</div>;
    if (type === "fire") return <div className="element fire">Feu</div>;
    if (type === "rock") return <div className="element rock">Rock</div>;
    if (type === "ground") return <div className="element ground">Ground</div>;
    if (type === "normal") return <div className="element normal">Normal</div>;
    if (type === "psychic")
      return <div className="element psychic">Psychic</div>;
    if (type === "ice") return <div className="element ice">Ice</div>;
    if (type === "water") return <div className="element water">water</div>;
    if (type === "electric")
      return <div className="element electric">electric</div>;
    if (type === "fairy") return <div className="element fairy">fairy</div>;
    if (type === "fighting")
      return <div className="element fighting">fighting</div>;
    if (type === "steel") return <div className="element steel">steel</div>;
    if (type === "ghost") return <div className="element ghost">ghost</div>;
    if (type === "dragon") return <div className="element dragon">dragon</div>;
    if (type === "flying") return <div className="element flying">flying</div>;
    if (type === "bug") return <div className="element bug">bug</div>;
  };

  let arr = [];
  const addUnique = (arr, item) => {
    if (arr.indexOf(item) === -1) {
      arr.push(item);
      //console.log(arr);
    }
  };
  const Poke = () => {
    return pokArr.map((pokemon, index) => {
      return (
        <div
          key={index}
          className="pokemon"
          style={cildrenStyle}
        >
          <h4>{pokemon.names.fr}</h4>
          <img src={pokemon.image} alt={"pokemon " + pokemon.names.fr} />
          <div className="pokemonElements">
            {pokemon.types.map((type, index) => {
              addUnique(arr, type);
              return elements(type);
            })}
          </div>
        </div>
      );
    });
  };
  const modify = () => {
    if(cildrenStyle.height === '200px'){
      setcildrenStyle({
      height: '115px',
      width: '115px',
      transform: 'scale(0.7)'
    })
    setContainerStyle({
      width: '100vw',
    })
    } else {
      setcildrenStyle(initialChildStyle)
      setContainerStyle(initialContainerStyle)
    }
  }
  if (isLoaded) {
    return (
      <>
        <button onClick={() => modify()}>??????/??????</button>
        <div className="poke-container" style={containerStyle}>
          <Poke />
        </div>
      </>
    );
  } else {
    return <div>Pokemon</div>;
  }
};
