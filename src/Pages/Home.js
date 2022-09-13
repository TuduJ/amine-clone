import React, { useEffect, useState } from "react";
import Header from "../Layouts/Header";
import Content from "../Layouts/Content";

const Home = () => {
    const [animeData, setAnimeData] = useState([]);
  
    const getAnimeData = async() => {
        const res = await (await fetch(`https://api.jikan.moe/v4/anime`)).json();
        setAnimeData(res?.data);
        console.log(res);
    }

    useEffect(() => {
        getAnimeData();
    }, [])
    
  return (
    <>
      <div className="text-white">
        <Header />
        <Content bodyText={"This my Home Page"} animeData={animeData}/>
      </div>
    </>
  );
};

export default Home;
