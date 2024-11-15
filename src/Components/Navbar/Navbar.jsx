import React from "react";
import logo from "../../Asserts/Frame 1.svg";
import Linkedin from "../../Asserts/Linkedin.svg";
import Behance from "../../Asserts/Behance.svg";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-nav">
      <nav className="navbar navbar-expand-lg bg-body-territory position-fixed w-100 z-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link mx-4 text-light active"
                  aria-current="page"
                  to="/about-us"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4 text-light" to="">
                  Capstones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-light" to="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="contactus-link">
            <div className="">
              <img className="mx-3" src={Linkedin} alt="" />
              <img className="mx-2" src={Behance} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
