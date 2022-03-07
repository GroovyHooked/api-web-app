import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Menu</Link>
      <Link to="/people">People</Link>
    </nav>
  );
};
