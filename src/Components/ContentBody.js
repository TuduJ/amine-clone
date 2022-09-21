import React from "react";
import CardData from "./CardData";
import { Link } from "react-router-dom";
import anya from "../Assets/anya.png";
import { Button } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";

const ContentBody = (props) => {
  const { animeData } = props;
  const dispatch = useDispatch();

  const onButtonNext = () => {
    fetchNextPageData();
  }

  const fetchNextPageData = async() => {
    const response = await axios.get(animeData?.links?.next).catch((err) => {
      console.log("Error -> ", err);
    });
    console.log(response?.data)
  }

  const animeList = () => {
    return (
      <>
        {animeData?.data?.map((anime) => (
          <div key={anime?.mal_id} className="col-sm-6 col-lg-4 col-xl-3">
            <Link to={`/anime/${anime?.mal_id}/`}>
              <CardData cardData={anime} />
            </Link>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div>
        <div className="row d-flex">
          {animeData?.data?.length ? (
            animeList()
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
        {/* {animeData?.data?.length ? (
          <div className="mt-5 mb-5 d-flex justify-content-end">
            <Button type="primary" size="large" disabled={!animeData?.links?.prev}>Prev</Button>
            <span className="mx-3"></span>
            <Button type="primary" size="large" onClick={() => onButtonNext()} disabled={!animeData?.links?.next} >Next</Button>
          </div>
        ): null} */}
      </div>
    </>
  );
};

export default ContentBody;
