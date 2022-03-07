import { Menu } from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import { People } from "./components/People";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />}>
          test1
        </Route>
        <Route path="/people" element={<People />}>
          test2
        </Route>
      </Routes>
    </div>
  );
}

export default App;
