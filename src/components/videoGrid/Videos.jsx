import React from "react";
import { SingleVideo } from "./SingleVideo";
import { data } from "../../data";

export const Videos = () => {
  return (
    <div className='videos-container'>
      {data.map((item, index) => {
        return <SingleVideo key={index} item={item} />;
      })}
    </div>
  );
};
