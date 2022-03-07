import { Menu } from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import { People } from "./components/People";
import { Navbar } from "./components/Navbar";
import { Planets } from "./components/Planets";
import { Resident } from "./components/Resident";
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
      </Routes>
    </div>
  );
}

export default App;
