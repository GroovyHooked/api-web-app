import { useState, useMemo } from "react";
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

  const [boolMovies, setBoolMovies] = useState(false);
  const [boolPeople, setBoolPeople] = useState(false);
  const [boolVehicules, setBoolVehicules] = useState(false);


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

  const fetchVehicules = async () => {
    if (boolVehicules) return
    const response1 = await fetch(vehiculeUrl1);
    const data1 = await response1.json();
    const data11 = data1.results
   
    const response2 = await fetch(vehiculeUrl2);
    const data2 = await response2.json();
    const data12 = data2.results
  
    const response3 = await fetch(vehiculeUrl3);
    const data3 = await response3.json();
    const data13 = data3.results
    
    const response4 = await fetch(vehiculeUrl4);
    const data4 = await response4.json();
    const data14 = data4.results
  
    try{
      setVehicles1(data11);
      setVehicles2(data12);
      setVehicles3(data13);
      setVehicles4(data14);
      setBoolVehicules(true)
    } catch(err){ console.error(err)}
  }

  const fetchMovieUrl = async () => {
    if (boolMovies) return
    const response = await fetch(moviesUrl);
    const movieUrls = await response.json();
    const data = movieUrls.results
    try {
      setMovies(data)
      setBoolMovies(true)
    } catch (e) {console.error(e)}
  }

  const fetchResidents = async () => {
    if (boolPeople) return
    const response1 = await fetch(url1);
    const data1 = await response1.json();
    const data11 = data1.results
   
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    const data12 = data2.results
  
    const response3 = await fetch(url3);
    const data3 = await response3.json();
    const data13 = data3.results
    
    const response4 = await fetch(url4);
    const data4 = await response4.json();
    const data14 = data4.results
   
    const response5 = await fetch(url5);
    const data5 = await response5.json();
    const data15 = data5.results
    
    const response6 = await fetch(url6);
    const data6 = await response6.json();
    const data16 = data6.results
    
    const response7 = await fetch(url7);
    const data7 = await response7.json();
    const data17 = data7.results
    
    const response8 = await fetch(url8);
    const data8 = await response8.json();
    const data18 = data8.results
    
    const response9 = await fetch(url9);
    const data9 = await response9.json();
    const data19 = data9.results
    try{
      setData1(data11);
      setData2(data12);
      setData3(data13);
      setData4(data14);
      setData5(data15);
      setData6(data16);
      setData7(data17);
      setData8(data18);
      setData9(data19);
      setBoolPeople(true);
    } catch(err){ console.error(err)}
  };

  useMemo(() => {
      fetchMovieUrl()
      fetchResidents();
      fetchVehicules();
      
  }, []);


  let residentList = [];
  let movieList = [];
  let vehiculeList = [];

  
  if (boolMovies && boolPeople && boolVehicules) {
    movies.forEach((movie) => movieList.push(movie.title));
    console.log("App::movies => ", movies);
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
        <Route path="/films" element={<Films residentArray={residentList} />} />
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
