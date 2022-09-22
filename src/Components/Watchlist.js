import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";

const Watchlist = (props) => {
  const {animeData} = props;
  const [wishListBoard, setWishListBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    
    const data = JSON.parse(window.sessionStorage.getItem("wishlist"))
    if(data?.find((ele) => ele?.mal_id === id)){
      console.log("Matched Data")
      return
    }
    const wishList = animeData?.data?.filter((anime) => id === anime?.mal_id);
    setWishListBoard((wishListBoard) => [...wishListBoard, wishList[0]]);
  };

  useEffect(() => {
    const data = JSON.parse(window.sessionStorage.getItem('wishlist'));
    setWishListBoard(data);
  }, [])

  useEffect(() => {
    window.sessionStorage.setItem('wishlist', JSON.stringify(wishListBoard));
  }, [wishListBoard]);

  return (
    <>
    <div ref={drop} className="border h-100">
      <p className="fs-2 mb-5">This is watchlist</p>
      {wishListBoard?.length ? (
        wishListBoard?.map((anime) => (
          <p key={anime?.mal_id}>{anime?.title}</p>
        ))
      ) : (
        <>
          <p>No data Present</p>
        </>
      )}
      </div>
    </>
  );
};

export default Watchlist;
