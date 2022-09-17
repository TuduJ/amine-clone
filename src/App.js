import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import AnimeDetail from "./Pages/AnimeDetail";
import Error from "./Pages/Error";
import Genre from "./Pages/Genre";
import Home from "./Pages/Home";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const getAnimeData = async () => {
    const res = await (await fetch(`https://api.jikan.moe/v4/anime`)).json();
    setAnimeData(res?.data);
  };

  useEffect(() => {
    getAnimeData();
  }, []);

  const getSearchAnimeData = async (value) => {
    const res = await (await fetch(`https://api.jikan.moe/v4/anime?q=${value}&limit=20`)).json();
    setAnimeData(res?.data);
  };

  const onSearch = (value) => {
    setSearchValue(value);
    getSearchAnimeData(value);
  }

  return (
    <>
      <div className="mx-5 mt-5 bg-transparent text-white">
        <BrowserRouter>
          <Header onSearch={onSearch}/>
          <Routes>
            <Route path="/" element={<Home animeData={animeData}/>} />
            <Route path="/genre" element={<Genre searchValue={searchValue} animeData={animeData}/>} />
            <Route path="/anime/:id" element={<AnimeDetail searchValue={searchValue} animeData={animeData}/>} />
            <Route path="*" element={<Error searchValue={searchValue} animeData={animeData}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
