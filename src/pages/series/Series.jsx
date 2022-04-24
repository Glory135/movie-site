import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LongAdvert } from "../../components/Adverts";
import { SearchBar } from "../../components/SearchBar";
import { Sidebar } from "../../components/Sidebar";
import { Videos } from "../../components/videoGrid/Videos";
import longAd from "../../images/test/ads2.png";

export const Series = () => {
  const [data, setData] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://moviehunterr.herokuapp.com/api/series/${search}`
      );
      setData(res.data);
    };
    getMovies();
  }, [search]);
  return (
    <>
      <SearchBar data={data} type='series' />
      <div className='series'>
        <LongAdvert img={longAd} />
        <div className='series-container'>
          <div className='series-main'>
            <div className='series-main-head'>
              <h1>All Series</h1>
            </div>
            <Videos data={data} type='series' />
          </div>
          <div className='series-sidebar'>
            <Sidebar />
          </div>
        </div>
        <LongAdvert img={longAd} />
      </div>
    </>
  );
};
