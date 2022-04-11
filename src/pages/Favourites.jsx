import React from "react";
import { LongAdvert } from "../components/Adverts";
import { SearchBar } from "../components/SearchBar";
import { Sidebar } from "../components/Sidebar";
import { Videos } from "../components/videoGrid/Videos";
import longAd from "../images/test/ads2.png";
export const Favourites = () => {
  return (
    <>
      <SearchBar />
      <div className='favourites'>
        <div className='favourites-container'>
          <div className='fav-head'>Your Favourite Movies</div>
          <Videos />
        </div>
        <div className='favourites-side'>
          <Sidebar />
        </div>
      </div>{" "}
      <LongAdvert img={longAd} />
    </>
  );
};
