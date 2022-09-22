import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Content from "../Layouts/Content";
import { removeAnimeList, setAnimeList } from "../redux/actions/animeActions";

const Home = () => {
  const animeData = useSelector((state) => state.allAnime);

  const dispatch = useDispatch();

  const fetchAnimeList = async () => {
    const response = await axios
      .get("https://api.jikan.moe/v4/anime")
      .catch((err) => {
        console.log("Error -> ", err);
      });
    dispatch(setAnimeList(response.data));
  };

  useEffect(() => {
    fetchAnimeList();
    return () => {
      dispatch(removeAnimeList());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="text-white">
        {Object?.keys(animeData?.anime)?.length === 0 ? (
          <p className="text-center fs-2"> ...Loading </p>
        ) : (
          <Content animeData={animeData?.anime} />
        )}
      </div>
    </>
  );
};

export default Home;
