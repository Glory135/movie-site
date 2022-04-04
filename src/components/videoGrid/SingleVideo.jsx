import React from "react";

export const SingleVideo = ({ item }) => {
  return (
    <div className='singleVideo'>
      <img className='singleVideo-img' src={item} alt='' />
      <div className='singleVideo-desc-container'>
        <div className='desc-name-container'>
          <h1>movie name fciwdc vijnd ejnv</h1>
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
