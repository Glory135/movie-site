import React from "react";
import { useLocation } from "react-router-dom";
import { Paginate } from "../Paginate";

export const Videos = ({ data, type }) => {
  const { search } = useLocation();
  return (
    <div className='videos-container'>
      {data.length !== 0 ? (
        <Paginate data={data} type={type} />
      ) : (
        <h1 className='none'>
          Search Result <span>{search.split("=")[1]}</span> not found
        </h1>
      )}
    </div>
  );
};
