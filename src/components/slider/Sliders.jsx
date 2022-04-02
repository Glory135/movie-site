import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../data";
import { SingleSlider } from "./SingleSlider";

const carouselProps = {
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 655,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Sliders = () => {
  return (
    <div className='sliders'>
      <Slider {...carouselProps}>
        {data.map((singleData, index) => {
          return <SingleSlider key={index} item={singleData} />;
        })}
      </Slider>
    </div>
  );
};
