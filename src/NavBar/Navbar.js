import "./Navbar.css";

import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      <ul className="navbar">
        <li>
          <Link to="/">
            <p>Shop</p>
          </Link>
        </li>
        <li>
          <Link to="About">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to="Contact">
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
