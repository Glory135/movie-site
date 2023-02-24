import React, { useEffect, useState } from "react";
import { LongAdvert } from "../../components/Adverts";
import { Sidebar } from "../../components/Sidebar";
import longAd from "../../images/test/ads2.png";
import { SeriesGrid } from "../../components/seriesGrid/SeriesGrid";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Image } from "cloudinary-react";
import { handleFav } from "../../Utilities";

export const SeriesEpisode = () => {
  const [episode, setEpisode] = useState({ poster: { poster: "" } });
  const [serie, setSerie] = useState({ genres: [] });
  const [season, setSeason] = useState([]);
  const [faved, setFaved] = useState(false);

  const { search } = useLocation();
  const id = search.split("=")[1];
  useEffect(() => {
    const getEpisode = async () => {
      const res = await axios.get(
        `https://movie-site-5lzl.onrender.com/api/series/season/episode/${id}`
      );
      setEpisode(res.data);
    };
    const getSeason = async () => {
      const res = await axios.get(
        `https://movie-site-5lzl.onrender.com/api/series/season/${episode.season}`
      );
      setSeason(res.data.episodes);
    };
    const getSerie = async () => {
      const res = await axios.get(
        `https://movie-site-5lzl.onrender.com/api/series/${episode.series}`
      );
      setSerie(res.data.singleSeries);
    };
    getEpisode();
    getSeason();
    getSerie();
  }, [id, episode.series, episode.season]);

  // check fav
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
    const check = async () => {
      try {
        const exists = await axios.get(
          `https://movie-site-5lzl.onrender.com/api/users/me/favourite/${id}`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );

        if (exists) {
          setFaved(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    check();
  }, [id]);

  return (
    <>
      <LongAdvert img={longAd} />
      <div className='singleMovie'>
        <div className='singleMovie-main'>
          <div className='movie-name-container'>
            <h1>
              {episode.title}{" "}
              <span>
                (2012) season {episode.seasonNo} episode {episode.episode}
              </span>
            </h1>
          </div>
          <div className='movie-img-container'>
            <Image cloudName='drpa7x9bu' publicId={episode.poster.poster} />
          </div>
          <div className='movie-reactions-container'>
            <div
              onClick={() => {
                handleFav(id, faved, setFaved);
              }}
              style={{
                border: faved ? "1px solid #dd003f" : "1px solid #abb7c4",
                color: faved ? "#dd003f" : "#abb7c4",
              }}
              className='reaction fav'
            >
              <i
                style={{
                  color: faved ? "#dd003f" : "#abb7c4",
                }}
                className='fa fa-heart'
              ></i>{" "}
              Add To Favourites
            </div>
          </div>
          <div className='movie-desc-container'>
            <div className='movie-desc'>
              <h2>Season</h2>: <p>{episode.seasonNo}</p>
            </div>
            <div className='movie-desc'>
              <h2>Episode</h2>: <p>{episode.episode}</p>
            </div>
            <div className='movie-desc'>
              <h2>Air Date</h2>: <p>{episode.airDate}</p>
            </div>
            <div className='movie-desc'>
              <h2>Genres</h2>: <p>{serie.genres.join(", ")}</p>
            </div>
            <div className='movie-desc'>
              <h2>Writter</h2>: <p>{serie.writter}</p>
            </div>
            <div className='movie-desc'>
              <h2>Director</h2>: <p>{serie.director}</p>
            </div>

            <div className='movie-desc'>
              <h2>RunTime</h2>: <p>{episode.runTime}</p>
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
            {season.length <= 0 ? (
              <h1>No Episodes</h1>
            ) : (
              <SeriesGrid data={season} type='Episode' />
            )}
          </div>
        </div>
        <div className='singleMovie-sidebar'>
          <Sidebar />
        </div>
      </div>
    </>
  );
};
