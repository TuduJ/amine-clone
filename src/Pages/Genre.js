import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../Layouts/Content";
import { setGenreList } from "../redux/actions/animeActions";

const Genre = () => {
  const genreList = useSelector((state) => state.allGenre);
  const animeList = useSelector((state) => state.allAnime);

  const dispatch = useDispatch();

  const fetchGenreList = async () => {
    const response = await axios
      .get(`https://api.jikan.moe/v4/genres/anime`)
      .catch((err) => {
        console.log("Error -> ", err);
      });
    dispatch(setGenreList(response?.data));
  };

  useEffect(() => {
    fetchGenreList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const genreData = () => {
    return Object.keys(genreList?.genre).length === 0 ? (
      <p className="fs-2 text-center"> ...Loading </p>
    ) : (
      genreList?.genre?.data?.map((data) => (
        <button
          type="button"
          className="btn btn-warning m-2"
          key={data?.mal_id}
        >
          {data?.name}
        </button>
      ))
    );
  };

  return (
    <>
      <div className="text-white p-4">
        {Object.keys(animeList?.anime).length === 0 ? (
          genreData()
        ) : (
          <Content animeData={animeList?.anime} />
        )}
      </div>
    </>
  );
};

export default Genre;
