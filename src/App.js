import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Layouts/Header";
import AnimeDetail from "./Pages/AnimeDetail";
import Error from "./Pages/Error";
import Genre from "./Pages/Genre";
import Home from "./Pages/Home";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAnimeData = async () => {
    setIsLoading(true);
    const res = await (await fetch(`https://api.jikan.moe/v4/anime`)).json();
    setAnimeData(res?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getAnimeData();
  }, []);

  const getSearchAnimeData = async (value) => {
    const res = await (await fetch(`https://api.jikan.moe/v4/anime?q=${value}&limit=20`)).json();
    setAnimeData(res?.data);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/';
    navigate(path);
  } 

  const onSearch = (value) => {
    setSearchValue(value);
    getSearchAnimeData(value);
    routeChange();
  }

  return (
    <>
      <div className="mx-5 mt-5 bg-transparent text-white">
          <Header onSearch={onSearch} searchValue={searchValue}/>
          <Routes>
            <Route path="/" element={<Home animeData={animeData}/>} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/anime/:id" element={<AnimeDetail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        
      </div>
    </>
  );
}

export default App;
