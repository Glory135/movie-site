import React from "react";

export const MovieList = ({ item, type }) => {
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
          <span
            style={{
              backgroundColor:
                type === "movie"
                  ? "#dd003f"
                  : type === "series"
                  ? "#d9f436"
                  : null,
            }}
            className='type'
          >
            type
          </span>
          <i>
            <span className='year'> 2022</span>
          </i>
        </div>
      </div>
    </div>
  );
};
