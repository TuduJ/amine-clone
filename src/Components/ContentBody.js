import { Col, Row } from "antd";
import React from "react";
import CardData from "./CardData";

const ContentBody = (props) => {
  const { bodyText, animeData } = props;
  return (
    <>
      <div>
        <div className="row d-flex">
          {animeData?.map((anime) => (
            <div key={anime?.mal_id} className="col-sm-6 col-lg-4 col-xl-3">
              <CardData cardData={anime} />
            </div>
          ))}
        </div>
      </div>
      <p className="fs-4">{bodyText}</p>
    </>
  );
};

export default ContentBody;
