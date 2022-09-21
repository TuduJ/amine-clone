import React, { useState } from "react";
import AnimeContent from "../Components/AnimeContent";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const AnimeDetail = () => {

  const url = useParams();
  const [showData, setShowData] = useState();

  const getShowData = async () => {
    const res = await (
      await fetch(`https://api.jikan.moe/v4/anime/${url.id}`)
    ).json();
    setShowData(res?.data);
  };

  useEffect(() => {
    getShowData();
  }, []);

  return (
    <>
        <div className="text-white">
          <AnimeContent showData={showData} />
        </div>
    </>
  );
};

export default AnimeDetail;
