import React from "react";

const CardData = (props) => {
  const { cardData } = props;

  return (
    <>
      <div className="card mt-4">
        <div>
          <img
            src={cardData?.images?.jpg?.image_url}
            className="card-img-top card-img img-fluid"
            alt="..."
          />
          <p className="img-desc fs-6 align-middle">Click to know more</p>
        </div>
        <div className="card-body card-desc">
          <p className="card-title text-dark fw-semibold">{cardData?.title}</p>
          <p className="card-text text-dark">{cardData?.rating}</p>
        </div>
      </div>
    </>
  );
};

export default CardData;
