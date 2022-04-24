import React from "react";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

export const MovieList = ({ item, type }) => {
  return (
    <div className='movieList'>
      <div className='movieList-img-container'>
        <Image cloudName='drpa7x9bu' publicId={item.poster.poster} />
      </div>

      <div className='movieList-desc-container'>
        <div className='name-container'>
          <Link
            to={
              type === "movie"
                ? `/movies/movie/?id=${item._id}`
                : type === "series"
                ? `/series/seriesSingle/?id=${item._id}`
                : null
            }
            className='Link'
          >
            <h1>{item.title}</h1>
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
            <span className='year'> {item.year}</span>
          </i>
        </div>
      </div>
    </div>
  );
};
