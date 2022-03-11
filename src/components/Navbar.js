import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Menu</Link>
      <Link to="/people">People</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/films">Films</Link>
      <Link to="/species">Species</Link>
      <Link to="/test">Test1</Link>
      <Link to="/pokemon">Pokemon</Link>
    </nav>
  );
};
