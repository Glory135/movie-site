import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SearchBar = ({ data, type }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [place, setPlace] = useState("home");

  const handleChange = (e) => {
    const word = e.target.value;
    const newFilter = data.filter((i) => {
      return i.title.toLowerCase().includes(word.toLowerCase());
    });
    if (word === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    setSearch(e.target.value);
  };

  return (
    <>
      <div className='search-bar'>
        <select onChange={(e) => setPlace(e.target.value)} name='type' id=''>
          <option value='home'>Home</option>
          <option value='movies'>Movies</option>
          <option value='series'>Series</option>
        </select>
        <div className='search-container'>
          <input
            type='search'
            onChange={(e) => handleChange(e)}
            placeholder='search....'
          />

          <div className='icon-container'>
            <Link
              classNAme='Link'
              to={
                place === "home"
                  ? `/?search=${search}`
                  : place === "movies"
                  ? `/movies/?search=${search}`
                  : place === "series"
                  ? `/series/?search=${search}`
                  : null
              }
            >
              <i className='fa fa-search'></i>
            </Link>
          </div>
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div
          className='result-container'
          style={{ position: type === "home" ? "relative" : "absolute" }}
        >
          {filteredData.map((item, index) => {
            return (
              <Link
                key={index}
                className='Link'
                to={
                  type === "home"
                    ? `/series/seriesSingle/season/episode/?id=${item._id}`
                    : type === "movies"
                    ? `/movies/movie/?id=${item._id}`
                    : type === "series"
                    ? `/series/seriesSingle/?id=${item._id}`
                    : null
                }
              >
                <div className='result'>
                  {item.title}{" "}
                  <span>
                    {type === "home" && (
                      <>
                        {`season ${item.seasonNo}`}{" "}
                        <span>{`episode ${item.episode}`}</span>
                      </>
                    )}{" "}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
