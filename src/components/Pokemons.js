/* eslint-disable no-unused-expressions */
import { Pokemon } from "./Pokemon";

export const Pokemons = () => {

  let initialStyle = {
    paddingTop: "50px",
    width: "90%",
    display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "center",
    flexDirection: "row",
  };


  return (
    <div className="container" style={initialStyle}>
      <Pokemon />
    </div>
  );
};
