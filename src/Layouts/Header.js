import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setAnimeList } from "../redux/actions/animeActions";
import axios from "axios";
const { Search } = Input;

const Header = () => {
  const dispatch = useDispatch();

  const onSearchAnime = async (value) => {
    if (value !== "") {
      const response = await axios
        .get(`https://api.jikan.moe/v4/anime?q=${value}&limit=20`)
        .catch((err) => {
          console.log("Error -> ", err);
        });
      dispatch(setAnimeList(response?.data));
    } 
    // else {
    //   dispatch(removeAnimeList());
    // }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 rounded-4">
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand fs-3 fw-bolder" reloadDocument to={"/"}>
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
                <NavLink className="navbar-brand fs-5 fw-light" reloadDocument to={"/"}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="navbar-brand fs-5 fw-light" reloadDocument to={"/genre"}>
                  Genre
                </NavLink>
              </li>
            </ul>

            <div style={{ width: "30vw" }}>
              <Search
                allowClear
                placeholder="input search text"
                onSearch={onSearchAnime}
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
