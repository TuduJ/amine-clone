import React from "react";
import ContentBody from "../Components/ContentBody";
import Watchlist from "../Components/Watchlist";

const Content = (props) => {
    const {bodyText, animeData} = props;
  return (
    <div className="mx-3 mt-4">
      <div className="row">
        <div className="col-sm-9 align-self-center">
            <ContentBody bodyText={bodyText} animeData={animeData}/>
        </div>
        <div className="col-sm-3 align-self-center">
            <Watchlist/>
        </div>
      </div>
    </div>
  );
};

export default Content;
