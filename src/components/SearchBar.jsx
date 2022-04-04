import React from "react";

export const SearchBar = () => {
  return (
    <div className='search-bar'>
      <select name='type' id=''>
        <option value='everywere'>Everywere</option>
        <option value='movies'>Movies</option>
        <option value='series'>Series</option>
      </select>
      <div className='search-container'>
        <input type='text' placeholder='search....' />
        <div className='icon-container'>
          <i className='fa fa-search'></i>
        </div>
      </div>
    </div>
  );
};
