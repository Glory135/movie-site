import React from "react";

export const SideAdvert = ({ img }) => {
  return (
    <div className='sideAdvert'>
      <div className='sideAdvert-head'>
        <i className='fa fa-ad'></i>
      </div>
      <div className='sideAdvert-body'>
        <img src={img} alt='' />
      </div>
    </div>
  );
};

export const LongAdvert = ({ img }) => {
  return (
    <div className='longAdvert'>
      <div className='longAdvert-head'>
        <i className='fa fa-ad'></i>
      </div>
      <div className='longAdvert-body'>
        <img src={img} alt='' />
      </div>
    </div>
  );
};
