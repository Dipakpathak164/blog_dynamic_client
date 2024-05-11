import React from "react";
import Logo from "../img/logL.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
          <img src={Logo} width="100"/>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/?cat=art">
              Art
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/?cat=science">
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/?cat=technology">
              Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/?cat=cinema">
              Cinema
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/?cat=design">
              Design
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/?cat=food">
              Food
            </Link>
          </li>
          <span className="nav_xtra_link">
              John
          </span>
          <span className="nav_xtra_link">
              Logout
          </span>
          <span className="nav_xtra_link write">
            <Link to="/write">
               Write
            </Link>
          </span>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
