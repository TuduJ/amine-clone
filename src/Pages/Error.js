import React from "react";
import errorLogo from "../Assets/error_image.png";
import Content from "../Layouts/Content";

const Error = (props) => {
  const { searchValue, animeData } = props;

  return (
    <>
      {searchValue?.length ? (
        <Content animeData={animeData} />
      ) : (
        <div className="text-center text-white">
          <div className="container-md mt-5">
            <img
              className="img-fluid"
              style={{ width: "15%" }}
              src={errorLogo}
              alt="error_image"
            />
            <p className="fw-bold mb-0 pb-0" style={{ fontSize: "5rem" }}>
              404
            </p>
            <p className="fs-4 fw-semibold mb-0">OOPS! - PAGE NOT FOUND</p>
            <p className="fs-6">
              The page you were looking for could not be found. It might <br />
              have been removed, renamed, or did not exist in the first place.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Error;
