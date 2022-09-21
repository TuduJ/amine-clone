import React, { useEffect, useState } from "react";

const Genre = () => {
  const [genres, setGenres] = useState();

  const getGenreData = async () => {
    const res = await (
      await fetch(`https://api.jikan.moe/v4/genres/anime`)
    ).json();
    setGenres(res?.data);
    console.log(res?.data);
  };

  useEffect(() => {
    getGenreData();
  }, []);
  return (
    <>
      <div className="text-white p-4">
        {genres?.map((data) => (
          <button
            type="button"
            className="btn btn-warning m-2"
            key={data?.mal_id}
          >
            {data?.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Genre;
