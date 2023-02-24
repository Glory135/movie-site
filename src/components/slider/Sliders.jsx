import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SingleSlider } from "./SingleSlider";
import axios from "axios";

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
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const movies = await axios.get(
        "https://movie-site-5lzl.onrender.com/api/movies/all"
      );
      setMovies(movies.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='sliders'>
      <Slider {...carouselProps}>
        {movies.reverse().map((singleData, index) => {
          return <SingleSlider key={index} item={singleData} />;
        })}
      </Slider>
    </div>
  );
};
