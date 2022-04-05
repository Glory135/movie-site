import React from "react";
import { LongAdvert } from "../components/Adverts";
import { Sidebar } from "../components/Sidebar";
import { Sliders } from "../components/slider/Sliders";
import { Videos } from "../components/videoGrid/Videos";
import longAd from "../images/test/ads2.png";

export const Home = () => {
  return (
    <div className='home'>
      <div className='home-slider-container'>
        <Sliders />
      </div>
      <div className='home-main-container'>
        <div className='home-main-container-main'>
          <div className='home-main-head'>
            <h1>All Videos</h1>
          </div>
          <Videos />
        </div>
        <div className='home-main-container-side'>
          <Sidebar />
        </div>
      </div>
      <LongAdvert img={longAd} />
    </div>
  );
};
