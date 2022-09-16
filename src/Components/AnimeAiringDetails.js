import React from "react";

const AnimeAiringDetails = (props) => {
  const { showData } = props;

  return (
    <>
      <div className="m-5">
        <div className="pt-5">
          <div className="d-flex">
            <p className="m-0">
              <span className="fw-semibold">Japanese: </span>{" "}
              {showData?.title_japanese}{" "}
            </p>
          </div>
          <div className="d-flex">
            <p className="m-0">
              <span className="fw-semibold">Aired: </span>{" "}
              {showData?.aired?.string}
            </p>
          </div>
          <div className="d-flex">
            <p className="m-0">
              <span className="fw-semibold">Premiered: </span>{" "}
              {showData?.season} {showData?.year}
            </p>
          </div>
          <div className="d-flex">
            <p className="m-0">
              <span className="fw-semibold">Duration: </span>{" "}
              {showData?.duration?.split(" ")?.[0]}m
            </p>
          </div>
          <div className="d-flex">
            <p className="">
              <span className="fw-semibold">Popularity: </span>{" "}
              {showData?.popularity}
            </p>
          </div>
          <div className="d-flex">
            <p className="">
              <span className="fw-semibold">Genre: </span>{" "}
              {showData?.genres?.map((data) => (
                <span
                  key={data?.mal_id}
                  className="border rounded-pill px-1 mx-1"
                >
                  {data?.name}
                </span>
              ))}
            </p>
          </div>
          <div className="d-flex">
            <p className="m-0">
              <span className="fw-semibold">Studios: </span>{" "}
              {showData?.studios?.[0]?.name}
            </p>
          </div>
          <div className="d-flex">
            <p className="m-0">
              <span className="fw-semibold">Producers: </span>{" "}
              {showData?.producers?.map((data) => data?.name)?.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeAiringDetails;
