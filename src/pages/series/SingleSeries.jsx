import React, { useEffect, useState } from "react";
import { LongAdvert } from "../../components/Adverts";
import { Sidebar } from "../../components/Sidebar";
import longAd from "../../images/test/ads2.png";
import { SeriesGrid } from "../../components/seriesGrid/SeriesGrid";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { handleFav, notifyError, notifySuccess } from "../../Utilities";
import { Image } from "cloudinary-react";

export const SingleSeries = () => {
  const [serie, setSerie] = useState({ genres: [], poster: { poster: "" } });
  const [faved, setFaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [seasons, setSeasons] = useState([]);

  const { search } = useLocation();
  const id = search.split("=")[1];
  useEffect(() => {
    const getSeries = async () => {
      const res = await axios.get(
        `https://moviehunterr.herokuapp.com/api/series/${id}`
      );
      setSerie(res.data.singleSeries);
      setSeasons(res.data.seasons);
    };
    getSeries();
  }, [id]);

  // check fav
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
    const check = async () => {
      try {
        const exists = await axios.get(
          `https://moviehunterr.herokuapp.com/api/users/me/favourite/${id}`,
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

  // like
  const like = async () => {
    try {
      await axios.put(
        `https://moviehunterr.herokuapp.com/api/series/like/${id}`
      );
      notifySuccess("Linked!!");
    } catch (error) {
      console.log(error);
      notifyError("ERROR!!!");
    }
  };
  const unlike = async () => {
    try {
      await axios.put(
        `https://moviehunterr.herokuapp.com/api/series/unlike/${id}`
      );
      notifySuccess("unLinked!!");
    } catch (error) {
      console.log(error);
      notifyError("ERROR!!!");
    }
  };
  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false);
    if (liked) {
      unlike();
    } else {
      like();
    }
  };

  // dislike
  const dislike = async () => {
    try {
      await axios.put(
        `https://moviehunterr.herokuapp.com/api/series/dislike/${id}`
      );
      notifySuccess("Disliked!!");
    } catch (error) {
      console.log(error);
      notifyError("ERROR!!!");
    }
  };
  const undislike = async () => {
    try {
      await axios.put(
        `https://moviehunterr.herokuapp.com/api/series/undislike/${id}`
      );
      notifySuccess("unDisliked!!");
    } catch (error) {
      console.log(error);
      notifyError("ERROR!!!");
    }
  };
  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
    if (disliked) {
      undislike();
    } else {
      dislike();
    }
  };

  return (
    <div>
      <>
        <LongAdvert img={longAd} />
        <div className='singleMovie'>
          <div className='singleMovie-main'>
            <div className='movie-name-container'>
              <h1>{serie.title}</h1>
            </div>
            <div className='movie-img-container'>
              <Image cloudName='drpa7x9bu' publicId={serie.poster.poster} />
            </div>
            <div className='movie-reactions-container'>
              <div
                style={{
                  border: liked ? "1px solid blue" : "1px solid #abb7c4",
                  color: liked ? "blue" : "#abb7c4",
                }}
                onClick={() => {
                  handleLike();
                }}
                className='reaction like'
              >
                <i
                  style={{
                    color: liked ? "blue" : "#abb7c4",
                  }}
                  className='fa fa-thumbs-up'
                ></i>{" "}
                Like
              </div>
              <div
                style={{
                  border: disliked ? "1px solid red" : "1px solid #abb7c4",
                  color: disliked ? "red" : "#abb7c4",
                }}
                onClick={() => {
                  handleDislike();
                }}
                className='reaction dislike'
              >
                <i
                  style={{
                    color: disliked ? "red" : "#abb7c4",
                  }}
                  className='fa fa-thumbs-down'
                ></i>{" "}
                Dislike
              </div>
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
                <h2>Genres</h2>: <p>{serie.genres.join(", ")}</p>
              </div>
              <div className='movie-desc'>
                <h2>Writter</h2>: <p>{serie.writter}</p>
              </div>
              <div className='movie-desc'>
                <h2>Director</h2>: <p>{serie.director}</p>
              </div>
            </div>
            <div className='seriesGrid-container'>
              <div className='grid-head'>Related Seasons</div>
              {seasons.length <= 0 ? (
                <h1>No Seasons</h1>
              ) : (
                <SeriesGrid data={seasons} type='Season' />
              )}
            </div>
          </div>
          <div className='singleMovie-sidebar'>
            <Sidebar />
          </div>
        </div>
      </>
    </div>
  );
};
