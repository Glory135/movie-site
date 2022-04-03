import React from "react";
import { TopRated } from "./TopRated";

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <TopRated type='movies' />
      <TopRated type='series' />
    </div>
  );
};
