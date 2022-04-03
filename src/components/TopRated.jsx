import React from "react";
import { data } from "../data";
import { MovieList } from "./MovieList";

export const TopRated = ({ type }) => {
  return (
    <div>
      <div className='top-rated'>
        <div
          style={{
            backgroundColor:
              type === "movies"
                ? "#d9f436"
                : type === "series"
                ? "#dd003f"
                : null,
          }}
          className='top-head'
        >
          <i className='fa fa-arrow-circle-up fa-2x'></i>
          <h2>TOP 5 {type}</h2>
        </div>
        <div className='top-main-container'>
          <ul>
            {data.slice(0, 5).map((item, index) => (
              <li key={index}>
                {" "}
                <MovieList item={item} />{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
