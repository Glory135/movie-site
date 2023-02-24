import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { notifyError, notifySuccess } from "../../Utilities";
import { AdminSidebar } from "../AdminComponents/AdminSidebar";

export const PostEpisode = () => {
  const [title, setTitle] = useState("");
  const [season, setSeason] = useState(0);
  const [episode, setEpisode] = useState(0);
  const [airDate, setAirDate] = useState("");
  const [runTime, setRunTime] = useState("");
  const [poster, setPoster] = useState("");

  const { editMode, setEditMode } = useContext(Context);

  const navigate = useNavigate();
  const { search } = useLocation();
  const episodeId = search.split("=")[1];

  useEffect(() => {
    episodeId ? setEditMode(true) : setEditMode(false);
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `https://movie-site-5lzl.onrender.com/api/series/season/episode/${episodeId}`
        );
        setTitle(res.data.title);
        setSeason(res.data.seasonNo);
        setEpisode(res.data.episode);
        setAirDate(res.data.airDate);
        setRunTime(res.data.runTime);
        setPoster(res.data.poster);
      } catch (error) {
        console.log(error);
        notifyError("Error loading movie details");
      }
    };
    if (editMode) {
      getMovie();
    }
  }, [editMode, setEditMode, search, episodeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));

    if (editMode) {
      try {
        await axios.put(
          `https://movie-site-5lzl.onrender.com/api/admin/series/season/episode/${episodeId}`,
          {
            title,
            airDate,
            seasonNo: season,
            episode,
            runTime,
            poster,
          },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        navigate("/admin");
        notifySuccess(
          `Episode ${episode} of Season ${season} is ${title} Updated successfully`
        );
      } catch (error) {
        console.log(error);
        notifyError("Error try again");
      }
    } else {
      try {
        await axios.post(
          "https://movie-site-5lzl.onrender.com/api/admin/series/season/episode",
          {
            title,
            airDate,
            seasonNo: season,
            episode,
            runTime,
            poster,
          },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        navigate("/admin");
        notifySuccess(
          `Episode ${episode} Season ${season} of ${title} added successfully`
        );
      } catch (error) {
        console.log(error);
        notifyError("Error try again");
      }
    }
  };

  const previewPic = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPoster(reader.result);
    };
  };

  return (
    <div className='admin'>
      <div className='admin_side_container'>
        <AdminSidebar />
      </div>
      <div className='admin_main_container'>
        <div className='admin_main_head'>
          <h1>Post Episode</h1>
        </div>
        <form onSubmit={handleSubmit} className='postForm' autoComplete='off'>
          <div className='input-container'>
            <div className='label'>Title</div>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className='input-container'>
            <div className='label'>Season</div>
            <input
              type='number'
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              required
            />
          </div>
          <div className='input-container'>
            <div className='label'>Episode</div>
            <input
              type='number'
              value={episode}
              onChange={(e) => setEpisode(e.target.value)}
              required
            />
          </div>

          <div className='input-container'>
            <div className='label'>Air Date</div>
            <input
              type='date'
              value={airDate}
              onChange={(e) => setAirDate(e.target.value)}
              required
            />
          </div>

          <div className='input-container'>
            <div className='label'>Run Time</div>
            <input
              type='text'
              value={runTime}
              onChange={(e) => setRunTime(e.target.value)}
              required
            />
          </div>

          <div className='input-container'>
            <label className='file_label'>
              <span>
                <i className='fa fa-plus'></i>
                Add Movie Poster Image
              </span>
              <input
                type='file'
                onChange={(e) => {
                  const file = e.target.files[0];
                  previewPic(file);
                }}
              />
            </label>
          </div>

          {poster && (
            <img
              style={{ width: "30px", height: "50px" }}
              src={poster}
              alt='chosen'
            />
          )}

          <div className='input-container'>
            <label className='file_label'>
              <span>
                <i className='fa fa-plus'></i>
                Add Movie Video File
              </span>
              <input type='file' />
            </label>
          </div>

          <div className='btn-container'>
            <Button
              type='submit'
              variant='outlined'
              color='primary'
              style={{ width: "100%", color: "black" }}
            >
              {editMode ? "UPDATE" : "POST"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
