import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LongAdvert } from "../../components/Adverts";
import { SearchBar } from "../../components/SearchBar";
import { Sidebar } from "../../components/Sidebar";
import { Videos } from "../../components/videoGrid/Videos";
import longAd from "../../images/test/ads2.png";

export const Movies = () => {
  const [data, setData] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://movie-site-5lzl.onrender.com/api/movies/all/${search}`
      );
      setData(res.data);
    };
    getMovies();
  }, [search]);
  return (
    <>
      <SearchBar data={data} type='movies' />
      <div className='movies'>
        <LongAdvert img={longAd} />
        <div className='movies-container'>
          <div className='movies-main'>
            <div className='movies-main-head'>
              <h1>All Movies</h1>
            </div>
            <Videos data={data} type='movie' />
          </div>
          <div className='movies-sidebar'>
            <Sidebar />
          </div>
        </div>
        <LongAdvert img={longAd} />
      </div>
    </>
  );
};
