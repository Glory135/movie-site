import React from "react";
import { SideAdvert } from "./Adverts";
import { TopRated } from "./TopRated";
import sideAd from "../images/test/ads1.png";

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SideAdvert img={sideAd} />
      <TopRated type='movie' />
      <SideAdvert img={sideAd} />
      <TopRated type='series' />
      <SideAdvert img={sideAd} />
    </div>
  );
};
