/* eslint-disable no-unused-expressions */
import { Pokemon } from "./Pokemon";

export const Pokemons = () => {
  const style = {
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <div className="container" style={style}>
      <Pokemon />
    </div>
  );
};
