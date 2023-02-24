import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../../Utilities";
import { AdminSidebar } from "../AdminComponents/AdminSidebar";

export const PostSeason = () => {
  const [title, setTitle] = useState("");
  const [season, setSeason] = useState(0);
  const [year, setYear] = useState(0);
  const [poster, setPoster] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
    try {
      await axios.post(
        "https://movie-site-5lzl.onrender.com/api/admin/series/season",
        {
          title,
          season,
          year,
          poster,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      navigate("/admin");
      notifySuccess(`Season ${season} of ${title} added successfully`);
    } catch (error) {
      console.log(error);
      notifyError("Error try again");
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
          <h1>Post Season</h1>
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
            <div className='label'>Year</div>
            <input
              type='number'
              value={year}
              onChange={(e) => setYear(e.target.value)}
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

          <div className='btn-container'>
            <Button
              type='submit'
              variant='outlined'
              color='primary'
              style={{ width: "100%", color: "black" }}
            >
              POST
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
