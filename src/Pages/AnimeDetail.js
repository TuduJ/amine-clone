import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnimeDetail,
  removeAnimeDetail,
} from "../redux/actions/animeActions";
import AnimeAiringDetails from "../Components/AnimeAiringDetails";
import AnimeShowDetails from "../Components/AnimeShowDetails";

const AnimeDetail = () => {
  const animeDetail = useSelector((state) => state.animeDetail);

  const url = useParams();

  const dispatch = useDispatch();

  const fetchAnimeDetails = async () => {
    const response = await axios
      .get(`https://api.jikan.moe/v4/anime/${url.id}`)
      .catch((err) => {
        console.log("Err -> ", err);
      });

    dispatch(setAnimeDetail(response.data));
    console.log(animeDetail);
  };

  useEffect(() => {
    if (url.id && url.id !== "") fetchAnimeDetails();
    return () => {
      dispatch(removeAnimeDetail());
    };
  }, [url]);

  return (
    <>
      <div className="text-white">
        <div
          className="container-fluid w-100 bg-dark mt-3"
          style={{
            backgroundImage: `url(${animeDetail?.data?.images?.jpg?.large_image_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {Object.keys(animeDetail).length === 0 ? (
            <p className="fs-1 text-center">... Loading</p>
          ) : (
            <div className="row">
              <div
                className="col-xl-8"
                style={{ backgroundColor: "rgba(0,0,0, 0.6)" }}
              >
                <AnimeShowDetails showData={animeDetail?.data} />
              </div>
              <div
                className="col-xl-4"
                style={{ backgroundColor: "rgba(0,0,0, 0.8)" }}
              >
                <AnimeAiringDetails showData={animeDetail?.data} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AnimeDetail;
