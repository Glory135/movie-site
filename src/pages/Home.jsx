import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LongAdvert } from "../components/Adverts";
import { SearchBar } from "../components/SearchBar";
import { Sidebar } from "../components/Sidebar";
import { Sliders } from "../components/slider/Sliders";
import { Videos } from "../components/videoGrid/Videos";
import longAd from "../images/test/ads2.png";

export const Home = () => {
  const [episodes, setEpisodes] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const getEpisodes = async () => {
      const res = await axios.get(
        `https://moviehunterr.herokuapp.com/api/series/season/episodes/all/${search}`
      );
      setEpisodes(res.data);
    };
    getEpisodes();
  }, [search]);
  return (
    <>
      <SearchBar data={episodes} type='home' />
      <div className='home'>
        <div className='home-slider-container'>
          <Sliders />
        </div>
        <div className='home-main-container'>
          <div className='home-main-container-main'>
            <div className='home-main-head'>
              <h1>All Videos</h1>
            </div>
            <Videos data={episodes} type='episode' />
          </div>
          <div className='home-main-container-side'>
            <Sidebar />
          </div>
        </div>
        <LongAdvert img={longAd} />
      </div>
    </>
  );
};
