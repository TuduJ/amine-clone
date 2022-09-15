import React from "react";
import Header from "../Layouts/Header";
import Content from "../Layouts/Content";

const AnimeDetail = () => {
  return (
    <>
      <div className="text-white">
        <Header />
        <Content bodyText={"This my Anime Detail Page"}/>
      </div>
    </>
  );
};

export default AnimeDetail;
