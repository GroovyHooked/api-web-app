import { Menu } from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import { People } from "./components/people/People";
import { Navbar } from "./components/Navbar";
import { Planets } from "./components/planets/Planets";
import { PlanetsResident } from "./components/planets/PlanetsResident";
import { Films } from "./components/films/Films";
import { Species } from "./components/species/Species";
import { Planet } from "./components/planets/Planet";
import { Test } from "./components/Test";
import { Pokemon } from "./components/Pokemon.js";

import "./App.css";
let foo = window.location.href;
console.log("foo: " + foo);
let bar = foo.split("/");
console.log("bar : " + bar);
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />

        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/resident/:id" element={<PlanetsResident />} />
        <Route path="/films" element={<Films />} />
        <Route path="/species" element={<Species />} />
        <Route path="/planet/:id" element={<Planet />} />
        <Route path="/test" element={<Test />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
