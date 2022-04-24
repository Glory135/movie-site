import React from "react";
import { Link } from "react-router-dom";

const random = (n) => {
  let ran = Math.floor(Math.random() * n);
  return ran;
};
const colors = ["#dd003f", "#d9f436", "#233a50", "blue"];
export const SingleSlider = ({ item }) => {
  return (
    <Link className='Link' to={`/movies/movie/?id=${item._id}`}>
      <div
        style={{
          backgroundImage: `url(${item.poster.url})`,
        }}
        className='slider'
      >
        <div className='slider-container'>
          <div className='type'>
            <span>movie</span>
          </div>
          <ul className='genres'>
            {item.genres.map((genre, index) => {
              return (
                <li key={index} style={{ backgroundColor: colors[random(4)] }}>
                  {genre}
                </li>
              );
            })}
          </ul>

          <h2 className='name'> {item.title}</h2>
        </div>
      </div>{" "}
    </Link>
  );
};
