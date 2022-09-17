import React from "react";
import CardData from "./CardData";
import { Link } from "react-router-dom";
import anya from "../Assets/anya.png"

const ContentBody = (props) => {
  const { animeData } = props;
  return (
    <>
      <div>
        <div className="row d-flex">
          {animeData?.length ? (
            animeData?.map((anime) => (
              <div key={anime?.mal_id} className="col-sm-6 col-lg-4 col-xl-3">
                <Link to={`/anime/${anime?.mal_id}/`}>
                  <CardData cardData={anime} />
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center text-white">
              <div className="container-md mt-5">
                <img
                  className="img-fluid"
                  style={{ width: "50%" }}
                  src={anya}
                  alt="error_image"
                />
                <p className="fw-bold mb-0 pb-0" style={{ fontSize: "3rem" }}>
                  No Result Found
                </p>
              </div>
            </div>
          )}
          {}
        </div>
      </div>
    </>
  );
};

export default ContentBody;
