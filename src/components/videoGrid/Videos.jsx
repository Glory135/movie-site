import React from "react";
import { data } from "../../data";
import { Paginate } from "../Paginate";

export const Videos = ({ type }) => {
  return (
    <div className='videos-container'>
      <Paginate data={data} type={type} />
    </div>
  );
};
