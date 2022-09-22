import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ContentBody from "../Components/ContentBody";
import Watchlist from "../Components/Watchlist";

const Content = (props) => {
  const { animeData } = props;

  

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mx-3 mt-4">
        <div className="row">
          <div className="col-sm-9 align-self-center">
            <ContentBody animeData={animeData} />
          </div>
          <div className="col-sm-3 mt-4 text-bg-dark">
            <Watchlist animeData={animeData}/>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Content;
