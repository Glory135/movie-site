import React from "react";
import { LongAdvert } from "../components/Adverts";
import { SearchBar } from "../components/SearchBar";
import { Sidebar } from "../components/Sidebar";
import { Videos } from "../components/videoGrid/Videos";
import longAd from "../images/test/ads2.png";

export const Series = () => {
  return (
    <>
      <SearchBar />
      <div className='series'>
        <LongAdvert img={longAd} />
        <div className='series-container'>
          <div className='series-main'>
            <div className='series-main-head'>
              <h1>All Series</h1>
            </div>
            <Videos />
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
