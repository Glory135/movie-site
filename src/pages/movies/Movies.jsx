import React from "react";
import { LongAdvert } from "../../components/Adverts";
import { SearchBar } from "../../components/SearchBar";
import { Sidebar } from "../../components/Sidebar";
import { Videos } from "../../components/videoGrid/Videos";
import longAd from "../../images/test/ads2.png";

export const Movies = () => {
  return (
    <>
      <SearchBar />
      <div className='movies'>
        <LongAdvert img={longAd} />
        <div className='movies-container'>
          <div className='movies-main'>
            <div className='movies-main-head'>
              <h1>All Movies</h1>
            </div>
            <Videos type='movie' />
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
