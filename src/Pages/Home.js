import React from "react";
import Content from "../Layouts/Content";

const Home = (props) => {
  const { animeData } = props;

  return (
    <>
      <div className="text-white">
        <Content animeData={animeData} />
      </div>
    </>
  );
};

export default Home;
