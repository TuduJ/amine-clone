import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 rounded-4">
      <div className="container-fluid">
        <div>
          <Link className="navbar-brand fw-bolder" to={"/"}>
            ANIME WORLD
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="navbar-brand" to={"/"}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="navbar-brand" to={"/genre"}>
                Genre
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
