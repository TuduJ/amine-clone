import React from "react";
import Header from "../Layouts/Header";
import Content from "../Layouts/Content";

const Genre = () => {
  return (
    <>
      <div className="mt-5 text-white">
        <Header />
        <Content bodyText={"This my Genre Page"}/>
      </div>
    </>
  );
};

export default Genre;