import { Menu } from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators  } from "redux";
import * as actionCreators from './state/action_creator/index'

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
import { Vehicle } from "./components/vehicle/Vehicle";

import "./App.css";

function App() {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const {refreshMovies, refreshResidents, refreshVehicules} = bindActionCreators(actionCreators, dispatch);


    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/people" element={<People residentArray={state.resident} movieList={state.movies} />} />
          <Route
            path="/planets"
            element={<Planets residentArray={state.resident} refreshResidents={refreshResidents} />}
          />
          <Route
            path="/resident/:id"
            element={
              <PlanetsResident
                movieList={state.movies}
                vehicleList={state.vehicles}
              />
            }
          />
          <Route
            path="/films"
            element={
              <Films movieList={state.movies} residentArray={state.resident} />
            }
          />
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
            element={
              <Vehicles
                vehicleList={state.vehicles}
                residentArray={state.resident}
              />
            }
          />
          <Route
            path="/vehicule/:id"
            element={<Vehicle vehicleList={state.vehicles} />}
          />
          <Route
            path="/starships"
            element={<Starships movieList={state.movies} />}
          />
        </Routes>
      </div>
    );

}

export default App;
