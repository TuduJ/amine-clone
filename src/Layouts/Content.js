import React from "react";

const Content = (props) => {
    const {bodyText} = props;
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="col-sm-8 align-self-center border">
            <p className="fs-4">
            {bodyText}
            </p>
        </div>
        <div className="col-sm-4 align-self-center border">
            <p className="fs-5">
                Watchlist Section
            </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
