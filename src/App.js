import { Menu } from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux"

import { People } from "./components/people/People";
import { Navbar } from "./components/Navbar";
import { Planets } from "./components/planets/Planets";
import { PlanetsResident } from "./components/planets/PlanetsResident";
import { Films } from "./components/films/Films";
import { Species } from "./components/species/Species";
import { Planet } from "./components/planets/Planet";
import { Test } from "./components/Test";
import { Pokemons } from "./components/Pokemons";
import { Vehicles } from "./components/vehicle/Vehicles";
import { Film } from "./components/films/Film";
import { Starships } from "./components/starship/Starships";
import { Vehicle } from "./components/vehicle/Vehicle"

import "./App.css";

function App() {

  const state = useSelector((state) => state);
  console.log("state => ", state)

if(state.movies !== [] && state.vehicles !== [] && state.resident !== []) {  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/people" element={<People movieList={state.movies} />} />
        <Route
          path="/planets"
          element={<Planets residentArray={state.resident} />}
        />
        <Route
          path="/resident/:id"
          element={
            <PlanetsResident
              movieList={state.movies}
              vehiculeList={state.vehicles}
            />
          }
        />
        <Route path="/films" element={<Films residentArray={state.resident} />} />
        <Route
          path="/film/:id"
          element={<Film residentArray={state.resident} />}
        />
        <Route
          path="/species"
          element={<Species residentArray={state.resident} />}
        />
        <Route
          path="/planet/:id"
          element={<Planet residentArray={state.resident} />}
        />
        <Route path="/test" element={<Test />} />
        <Route path="/pokemon" element={<Pokemons />} />
        <Route
          path="/vehicles"
          element={<Vehicles residentArray={state.resident} />}
        />
        <Route
          path="/vehicule/:id"
          element={<Vehicle vehiculeList={state.vehicles}/>}
        />
        <Route
          path="/starships"
          element={<Starships movieList={state.movies} />}
        />
      </Routes>
    </div>
  ); 
   } else {
     return <div>Waiting...</div>;
   }
}

export default App;
