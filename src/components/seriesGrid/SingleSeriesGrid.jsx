import React from "react";
import { Link } from "react-router-dom";

export const SingleSeriesGrid = ({ item, count, type }) => {
  return (
    <Link
      to={
        type === "Season"
          ? "/series/seriesSingle/season"
          : type === "Episode"
          ? "/series/seriesSingle/season/episode"
          : "/series/seriesSingle"
      }
      className='Link'
    >
      <div style={{ backgroundImage: `url(${item})` }} className='SingleGrid'>
        <div className='grid-desc'>
          {type} {count}
        </div>
      </div>
    </Link>
  );
};
