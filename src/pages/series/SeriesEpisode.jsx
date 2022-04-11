import React from "react";
import { LongAdvert } from "../../components/Adverts";
import { Sidebar } from "../../components/Sidebar";
import img from "../../images/test/mv-it20.jpg";
import longAd from "../../images/test/ads2.png";
import { SeriesGrid } from "../../components/seriesGrid/SeriesGrid";

export const SeriesEpisode = () => {
  return (
    <>
      <LongAdvert img={longAd} />
      <div className='singleMovie'>
        <div className='singleMovie-main'>
          <div className='movie-name-container'>
            <h1>
              Brooklyn <span>(2012) season 1 episode 1</span>
            </h1>
          </div>
          <div className='movie-img-container'>
            <img src={img} alt='poster' />
          </div>
          <div className='movie-reactions-container'>
            <div className='reaction like'>
              <i className='fa fa-thumbs-up'></i> Like
            </div>
            <div className='reaction dislike'>
              <i className='fa fa-thumbs-down'></i> Dislike
            </div>
            <div className='reaction fav'>
              <i className='fa fa-heart'></i> Add To Favourites
            </div>
          </div>
          <div className='movie-desc-container'>
            <div className='movie-desc'>
              <h2>Season</h2>: <p>1</p>
            </div>
            <div className='movie-desc'>
              <h2>Episode</h2>: <p>1</p>
            </div>
            <div className='movie-desc'>
              <h2>Air Date</h2>: <p>April 24, 2012</p>
            </div>
            <div className='movie-desc'>
              <h2>Genres</h2>: <p>Adventure, sci-fi, Anime</p>
            </div>
            <div className='movie-desc'>
              <h2>Writter</h2>: <p>Bolaji Blessing</p>
            </div>
            <div className='movie-desc'>
              <h2>Director</h2>: <p>Adeyemi Glory</p>
            </div>

            <div className='movie-desc'>
              <h2>RunTime</h2>: <p> 1hr 30mins</p>
            </div>
          </div>

          <div className='move-container'>
            <div className='move prev'>prev episode</div>
            <div className='move next'>next episode</div>
          </div>

          <div className='btn-container'>
            <div className='btn'>
              Download <i className='fa fa-download'></i>{" "}
            </div>
          </div>

          <div className='seriesGrid-container'>
            <div className='grid-head'>Related Episodes</div>
            <SeriesGrid type='Episode' />
          </div>
        </div>
        <div className='singleMovie-sidebar'>
          <Sidebar />
        </div>
      </div>
    </>
  );
};
