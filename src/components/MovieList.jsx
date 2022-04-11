import React from "react";
import { Link } from "react-router-dom";

export const MovieList = ({ item, type }) => {
  return (
    <div className='movieList'>
      <div className='movieList-img-container'>
        <img src={item} alt='' />
      </div>

      <div className='movieList-desc-container'>
        <div className='name-container'>
          <Link
            to={
              type === "movie"
                ? "/movies/movie"
                : type === "series"
                ? "/series/seriesSingle"
                : null
            }
            className='Link'
          >
            <h1>Movie Name</h1>
          </Link>
        </div>

        <div>
          {" "}
          <span
            style={{
              backgroundColor:
                type === "movie"
                  ? "#dd003f"
                  : type === "series"
                  ? "#d9f436"
                  : null,
            }}
            className='type'
          >
            {type}
          </span>
          <i>
            <span className='year'> 2022</span>
          </i>
        </div>
      </div>
    </div>
  );
};
