import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Input } from "antd";
const { Search } = Input;

const Header = (props) => {
  const { onSearch } = props;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 rounded-4">
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand fs-3 fw-bolder" to={"/"}>
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginLeft: "2rem" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="navbar-brand fs-5 fw-light" to={"/"}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="navbar-brand fs-5 fw-light" to={"/genre"}>
                  Genre
                </NavLink>
              </li>
            </ul>

            <div style={{ width: "30vw" }}>
              <Search
                allowClear
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
