import React from "react";
import { SingleSeriesGrid } from "./SingleSeriesGrid";

export const SeriesGrid = ({ data, type }) => {
  return (
    <div className='grid-body'>
      {data.map((item, index) => {
        return <SingleSeriesGrid key={index} type={type} item={item} />;
      })}
    </div>
  );
};
