import React from "react";
import Card from "./Card";

const ContentBody = (props) => {
  const { bodyText, animeData } = props;
  return (
    <>
      <div>
        <div className="row d-flex">
          {animeData?.map((anime) => (
            <div key={anime?.mal_id} className="col-sm-6 col-md-4 col-lg-3">
              <Card cardData={anime} />
            </div>
          ))}
        </div>
      </div>
      <p className="fs-4">{bodyText}</p>
    </>
  );
};

export default ContentBody;
