import React from "react";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

export const SingleVideo = ({ item, type }) => {
  return (
    <div className='singleVideo'>
      <Image cloudName='drpa7x9bu' publicId={item.poster.poster} />
      <div className='singleVideo-desc-container'>
        <div className='desc-name-container'>
          <Link
            className='Link'
            to={
              type === "movie"
                ? `/movies/movie/?id=${item._id}`
                : type === "series"
                ? `/series/seriesSingle/?id=${item._id}`
                : type === "episode"
                ? `series/seriesSingle/season/episode/?id=${item._id}`
                : "/"
            }
          >
            <h1>
              {item.title}{" "}
              {type === "episode" &&
                `Season ${item.seasonNo} Episode ${item.episode}`}
            </h1>
          </Link>
          <span className='type'>{type === "movie" ? "movie" : "series"}</span>
        </div>
        <div className='desc-rest'>
          <div>
            {type === "episode" ? null : (
              <>
                {" "}
                <i className='fa fa-thumbs-up'></i> <span>{item.likes}</span>
                <i className='fa fa-thumbs-down'></i>{" "}
                <span>{item.dislikes}</span>{" "}
              </>
            )}
          </div>
          <span className='year'>{type === "movie" ? item.year : null}</span>
        </div>
      </div>
    </div>
  );
};
