import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Sliders } from "../components/slider/Sliders";

export const Home = () => {
  return (
    <div className='home'>
      <div className='home-slider-container'>
        <Sliders />
      </div>
      <div className='home-main-container'>
        <div className='home-main-container-main'>main</div>
        <div className='home-main-container-side'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
