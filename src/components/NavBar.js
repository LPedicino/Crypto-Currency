import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          {" "}
          Crypto <span className="purple">Search</span>
          <p>Click to load</p>
        </h1>
      </div>
    </Link>
  );
};

export default NavBar;
