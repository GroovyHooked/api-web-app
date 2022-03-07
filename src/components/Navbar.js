import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Menu</Link>
      <Link to="/people">People</Link>
      <Link to="/planets">Planets</Link>
    </nav>
  );
};
