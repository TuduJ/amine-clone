import React from "react";
import AnimeAiringDetails from "./AnimeAiringDetails";
import AnimeShowDetails from "./AnimeShowDetails";

const AnimeContent = (props) => {
  const { showData } = props;
  return (
    <>
      <div className="container-fluid w-100 bg-dark mt-3" style={{ backgroundImage: `url(${showData?.images?.jpg?.large_image_url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="row">
          <div className="col-xl-8" style={{backgroundColor: "rgba(0,0,0, 0.6)"}}>
            <AnimeShowDetails showData={showData}/>
          </div>
          <div className="col-xl-4" style={{backgroundColor: "rgba(0,0,0, 0.8)"}}>
            <AnimeAiringDetails showData={showData}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeContent;
