import React from "react";
import { Card } from 'antd';
const { Meta } = Card;

const CardData = (props) => {
  const { cardData } = props;
  return (
    <>
      <div className="card mt-4">
        <img
          src={cardData?.images?.jpg?.image_url}
          className="card-img-top card-img"
          alt="..."
        />
        <div className="card-body card-desc">
          <p className="card-title text-dark fw-semibold">{cardData?.title}</p>
          <p className="card-text text-dark">{cardData?.rating}</p>
        </div>
      </div>
    </>
  );
};

export default CardData;