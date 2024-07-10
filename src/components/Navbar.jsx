import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-light sticky-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Worko JOB
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Worko
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/chome" className="nav-link">
                    Chome
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/companies" className="nav-link">
                    Companies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="mockinterviews" className="nav-link">
                    Mock Interview
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/careerguidance" className="nav-link">
                    Career Guidance
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <Link to="/login" className="btn btn-outline-primary me-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
