import React from "react";

export const MovieList = ({ item }) => {
  return (
    <div className='movieList'>
      <div className='movieList-img-container'>
        <img src={item} alt='' />
      </div>

      <div className='movieList-desc-container'>
        <div className='name-container'>
          <h1>Movie Name</h1>
        </div>

        <div>
          {" "}
          <span className='type'>movie</span>
          <i>
            <span className='year'> 2022</span>
          </i>
        </div>
      </div>
    </div>
  );
};
