import React from "react";
import { Link } from "react-router-dom";

export const SingleSeriesGrid = ({ item, type }) => {
  console.log(item);
  return (
    <Link
      to={
        type === "Season"
          ? `/series/seriesSingle/season/?id=${item._id}`
          : type === "Episode"
          ? `/series/seriesSingle/season/episode/?id=${item._id}`
          : "/series"
      }
      className='Link'
    >
      <div
        style={{ backgroundImage: `url(${item.poster.url})` }}
        className='SingleGrid'
      >
        <div className='grid-desc'>
          {type} {type === "Season" ? item.season : item.episode}
        </div>
      </div>
    </Link>
  );
};
