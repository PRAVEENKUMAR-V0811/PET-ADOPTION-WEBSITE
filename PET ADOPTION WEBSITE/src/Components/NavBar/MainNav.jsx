import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Signup</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
