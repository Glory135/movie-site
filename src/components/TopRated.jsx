import React, { useState, useEffect } from "react";
import { MovieList } from "./MovieList";
import axios from "axios";

export const TopRated = ({ type }) => {
  const [videos, setVideos] = useState([]);

  const getMovies = async () => {
    try {
      const movies = await axios.get(
        "https://moviehunterr.herokuapp.com/api/movies/all"
      );
      setVideos(movies.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSeries = async () => {
    try {
      const series = await axios.get(
        "https://moviehunterr.herokuapp.com/api/series"
      );
      setVideos(series.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (type === "movie") {
      getMovies();
    } else if (type === "series") {
      getSeries();
    }
  }, [type]);
  return (
    <div>
      <div className='top-rated'>
        <div
          style={{
            backgroundColor:
              type === "movie"
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
            {videos.length > 0 &&
              videos
                .reverse()
                .slice(0, 5)
                .map((item, index) => (
                  <li key={index}>
                    {" "}
                    <MovieList type={type} item={item} />{" "}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
