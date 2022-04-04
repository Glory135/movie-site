import React from "react";

const random = (n) => {
  let ran = Math.floor(Math.random() * n);
  return ran;
};
const colors = ["#dd003f", "#d9f436", "#233a50", "blue"];
export const SingleSlider = ({ item }) => {
  return (
    <div style={{ backgroundImage: `url(${item})` }} className='slider'>
      <div className='slider-container'>
        <div className='type'>
          <span>series</span>
        </div>
        <ul className='genres'>
          <li style={{ backgroundColor: colors[random(4)] }}>action</li>
          <li style={{ backgroundColor: colors[random(4)] }}>adventure</li>
          <li style={{ backgroundColor: colors[random(4)] }}>sci-fi</li>
        </ul>
        <h2 className='name'>Movie name</h2>
      </div>
    </div>
  );
};
