import React from "react";
import Header from "../Layouts/Header";
import Content from "../Layouts/Content";

const Home = () => {
  return (
    <>
      <div className="mt-5 text-white">
        <Header />
        <Content bodyText={"This my Home Page"}/>
      </div>
    </>
  );
};

export default Home;
