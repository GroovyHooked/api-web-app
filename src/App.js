import { Menu } from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import { People } from "./components/people/People";
import { Navbar } from "./components/Navbar";
import { Planets } from "./components/planets/Planets";
import { Resident } from "./components/planets/Resident";
import { Films } from "./components/films/Films";
import { Species } from "./components/species/Species";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />

        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/resident/:id" element={<Resident />} />
        <Route path="/films" element={<Films />} />
        <Route path="/species" element={<Species />} />
      </Routes>
    </div>
  );
}

export default App;
