/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";

const Watchlist = (props) => {
  const { animeData } = props;
  const [wishListBoard, setWishListBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const data = JSON.parse(sessionStorage.getItem("wishlist"));
    if (data?.find((ele) => ele?.mal_id === id)) {
      return;
    }
    const wishList = animeData?.data?.filter((anime) => id === anime?.mal_id);
    setWishListBoard((wishListBoard) => [...wishListBoard, wishList?.[0]]);
  };

  const onListDelete = (id) => {
    const wishListBoardCopy = wishListBoard.filter((data) => {
      if(data?.mal_id !== id){
        return data;
      }
    });
     setWishListBoard(wishListBoardCopy);
  }

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("wishlist"));
    if (!data?.length) setWishListBoard(data);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("wishlist", JSON.stringify(wishListBoard));
  }, [wishListBoard]);

  return (
    <>
      <div ref={drop} className="h-100">
        <p className="fs-2 mb-4 mt-2 text-center">This is watchlist</p>
        {wishListBoard?.length ? (
          wishListBoard?.map((anime) => (
            <div
              key={anime?.mal_id}
              className="m-2 row text-bg-success"
            >
              <div className="col-8">
                <p className="fs-5 text-center">{anime?.title}</p>
              </div>
              <div className="col-4">
                <span className="btn" onClick={() => onListDelete(anime?.mal_id)}>delete</span>
              </div>
            </div>
          ))
        ) : (
          <>
            <p className="text-center fs-5">Drag anime to wishlist</p>
          </>
        )}
      </div>
    </>
  );
};

export default Watchlist;
