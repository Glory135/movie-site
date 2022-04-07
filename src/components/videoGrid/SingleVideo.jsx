import React from "react";
import { Link } from "react-router-dom";

export const SingleVideo = ({ item }) => {
  return (
    <div className='singleVideo'>
      <img className='singleVideo-img' src={item} alt='' />
      <div className='singleVideo-desc-container'>
        <div className='desc-name-container'>
          <Link className='Link' to='/movies/movie'>
            <h1>movie name fciwdc vijnd ejnv</h1>
          </Link>
          <span className='type'>movie</span>
        </div>
        <div className='desc-rest'>
          <div>
            <i className='fa fa-thumbs-up'></i> <span>12</span>
            <i className='fa fa-thumbs-down'></i> <span>2</span>
          </div>
          <span className='year'>2022</span>
        </div>
      </div>
    </div>
  );
};
