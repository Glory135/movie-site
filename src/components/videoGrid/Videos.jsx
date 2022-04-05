import React from "react";
// import { SingleVideo } from "./SingleVideo";
import { data } from "../../data";
import { Paginate } from "../Paginate";

export const Videos = () => {
  return (
    <div className='videos-container'>
      <Paginate data={data} />
    </div>
  );
};
