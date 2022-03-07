import { Menu } from "./components/Menu";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
