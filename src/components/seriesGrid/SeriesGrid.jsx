import React from "react";
import { data } from "../../data";
import { SingleSeriesGrid } from "./SingleSeriesGrid";

export const SeriesGrid = ({ type }) => {
  return (
    <div className='grid-body'>
      {data.map((item, index) => {
        return (
          <SingleSeriesGrid
            key={index}
            type={type}
            count={index + 1}
            item={item}
          />
        );
      })}
    </div>
  );
};
