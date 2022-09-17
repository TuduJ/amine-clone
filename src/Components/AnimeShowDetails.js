import React, { useState } from "react";

const AnimeShowDetails = (props) => {
  const { showData } = props;
  const [innerText, setInnerText] = useState(true);
  return (
    <>
      <div className="row m-5">
        <div className="col-md-5">
          <img
            src={showData?.images?.jpg?.large_image_url}
            alt="..."
            className=" img-fluid border border-light rounded"
          />
        </div>
        <div className="col">
          {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item" aria-current="page">
                {showData?.title} ( {showData?.title_japanese} )
              </li>
            </ol>
          </nav> */}
          <p className="fs-1 mb-1">{showData?.title}</p>
          <p className="fs-4 mb-4">{showData?.title_japanese}</p>
          <h6>
            <span className="badge bg-secondary">{showData?.rating}</span>{" "}
            <span className="badge bg-light text-dark">{showData?.score}</span>{" "}
            <span className="badge bg-light text-dark">{showData?.type}</span>
            <span className="dot"></span>
            <span className="text-white">Ep{showData?.episodes}</span>
            <span className="dot"></span>
            <span className="text-white">
              {showData?.duration?.split(" ")?.[0]}m
            </span>
          </h6>

          <p className="anime-synop">
            {showData?.synopsis?.slice(0, 200)}
            {!innerText && <span>{showData?.synopsis?.slice(200)}</span>}
            <span
              className="fw-bold"
              role="button"
              onClick={() => setInnerText(!innerText)}
            >
              {innerText ? "... +more" : " -less"}
            </span>
          </p>

          <a href={showData?.trailer?.url} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-outline-warning">
              Watch Trailer
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default AnimeShowDetails;
