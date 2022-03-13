import { useState, useEffect } from "react";
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
import { Pokemons } from "./components/Pokemons";
import { Vehicules } from "./components/vehicule/Vehicules";
import { Film } from "./components/films/Film";
import { Starships } from "./components/starship/Starships";
import "./App.css";

function App() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);
  const [data9, setData9] = useState([]);
  const [movies, setMovies] = useState([]);
  const [vehicles1, setVehicles1] = useState([]);
  const [vehicles2, setVehicles2] = useState([]);
  const [vehicles3, setVehicles3] = useState([]);
  const [vehicles4, setVehicles4] = useState([]);

  const [bool, setBoolean] = useState(false);

  const moviesUrl = "https://swapi.dev/api/films/";
  const url1 = "https://swapi.dev/api/people/?page=1";
  const url2 = "https://swapi.dev/api/people/?page=2";
  const url3 = "https://swapi.dev/api/people/?page=3";
  const url4 = "https://swapi.dev/api/people/?page=4";
  const url5 = "https://swapi.dev/api/people/?page=5";
  const url6 = "https://swapi.dev/api/people/?page=6";
  const url7 = "https://swapi.dev/api/people/?page=7";
  const url8 = "https://swapi.dev/api/people/?page=8";
  const url9 = "https://swapi.dev/api/people/?page=9";
  const vehiculeUrl1 = "https://swapi.dev/api/vehicles/?page=1";
  const vehiculeUrl2 = "https://swapi.dev/api/vehicles/?page=2";
  const vehiculeUrl3 = "https://swapi.dev/api/vehicles/?page=3";
  const vehiculeUrl4 = "https://swapi.dev/api/vehicles/?page=4";

  useEffect(() => {
    // for (let i = 1; i < 9; i++) {
    //   fetch(url + i)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       setData1((data) => [...data, res.results]);
    //     })
    //     .catch((err) => console.log(err));
    // }
    fetch(moviesUrl)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
      })
      .catch((err) => console.log(err));

    fetch(url1)
      .then((res) => res.json())
      .then((res) => {
        setData1(res.results);
        fetch(url2)
          .then((res) => res.json())
          .then((res) => {
            setData2(res.results);
            fetch(url3)
              .then((res) => res.json())
              .then((res) => {
                setData3(res.results);
                fetch(url4)
                  .then((res) => res.json())
                  .then((res) => {
                    setData4(res.results);
                    fetch(url5)
                      .then((res) => res.json())
                      .then((res) => {
                        setData5(res.results);
                        fetch(url6)
                          .then((res) => res.json())
                          .then((res) => {
                            setData6(res.results);
                            fetch(url7)
                              .then((res) => res.json())
                              .then((res) => {
                                setData7(res.results);
                                fetch(url8)
                                  .then((res) => res.json())
                                  .then((res) => {
                                    setData8(res.results);
                                    fetch(url9)
                                      .then((res) => res.json())
                                      .then((res) => {
                                        setData9(res.results);
                                      })
                                      .catch((err) => console.log(err));
                                  })
                                  .catch((err) => console.log(err));
                              })
                              .catch((err) => console.log(err));
                          })
                          .catch((err) => console.log(err));
                      })
                      .catch((err) => console.log(err));
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    setBoolean(true);

    fetch(vehiculeUrl1)
      .then((res) => res.json())
      .then((res) => {
        setVehicles1(res.results);
        fetch(vehiculeUrl2)
          .then((res) => res.json())
          .then((res) => {
            setVehicles2(res.results);
            fetch(vehiculeUrl3)
              .then((res) => res.json())
              .then((res) => {
                setVehicles3(res.results);
                fetch(vehiculeUrl4)
                  .then((res) => res.json())
                  .then((res) => {
                    setVehicles4(res.results);
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  let residentList = [];
  let movieList = [];
  let vehiculeList = [];
  // let count = 1;

  if (bool) {
    // data2.forEach((movie) => movieList.push(movie.title));

    // for (let i = data1.length - 1; i >= 0; i--) {
    //   for (let y = 0; y <= data1[i]?.length - 1; y++) {
    //     residentList.push([count, data1[i][y].name]);
    //     count++;
    //   }
    // }
    movies.forEach((movie) => movieList.push(movie.title));
    console.log("movies => ", movies);
    data1.forEach((movie) => residentList.push(movie.name));
    data2.forEach((movie) => residentList.push(movie.name));
    data3.forEach((movie) => residentList.push(movie.name));
    data4.forEach((movie) => residentList.push(movie.name));
    data5.forEach((movie) => residentList.push(movie.name));
    data6.forEach((movie) => residentList.push(movie.name));
    data7.forEach((movie) => residentList.push(movie.name));
    data8.forEach((movie) => residentList.push(movie.name));
    data9.forEach((movie) => residentList.push(movie.name));

    vehicles1.forEach((vehicle) => vehiculeList.push(vehicle.name));
    vehicles2.forEach((vehicle) => vehiculeList.push(vehicle.name));
    vehicles3.forEach((vehicle) => vehiculeList.push(vehicle.name));
    vehicles4.forEach((vehicle) => vehiculeList.push(vehicle.name));

    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/people" element={<People movieList={movieList} />} />
          <Route
            path="/planets"
            element={<Planets residentArray={residentList} />}
          />
          <Route
            path="/resident/:id"
            element={
              <PlanetsResident
                movieList={movieList}
                vehiculeList={vehiculeList}
              />
            }
          />
          <Route
            path="/films"
            element={<Films residentArray={residentList} />}
          />
          <Route
            path="/film/:id"
            element={<Film residentArray={residentList} />}
          />
          <Route
            path="/species"
            element={<Species residentArray={residentList} />}
          />
          <Route
            path="/planet/:id"
            element={<Planet residentArray={residentList} />}
          />
          <Route path="/test" element={<Test />} />
          <Route path="/pokemon" element={<Pokemons />} />
          <Route
            path="/vehicles"
            element={<Vehicules residentArray={residentList} />}
          />
          <Route
            path="/starships"
            element={<Starships movieList={movieList} />}
          />
        </Routes>
      </div>
    );
  } else {
    return <div>Waiting...</div>;
  }
}

export default App;
