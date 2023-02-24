import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../../Utilities";
import { AdminSidebar } from "../AdminComponents/AdminSidebar";
import cancel from "../../images/icon-close.svg";

export const PostSeries = () => {
  const [title, setTitle] = useState("");
  const [writter, setWritter] = useState("");
  const [director, setDirector] = useState("");
  const [poster, setPoster] = useState("");
  const [genres, setGenres] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
    try {
      await axios.post(
        "https://movie-site-5lzl.onrender.com/api/admin/series",
        { title, writter, director, poster, genres },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      navigate("/admin");
      notifySuccess(`${title} added successfully`);
    } catch (error) {
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

  const handleChange = (e) => {
    const value = e.target.value;
    const newArr = [...genres];
    if (value === "none") {
      console.log("ya");
    } else {
      newArr.push(value);
    }
    setGenres(newArr);
  };

  return (
    <div className='admin'>
      <div className='admin_side_container'>
        <AdminSidebar />
      </div>
      <div className='admin_main_container'>
        <div className='admin_main_head'>
          <h1>Post Series</h1>
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
            <div className='label'>Writter</div>{" "}
            <input
              type='text'
              value={writter}
              onChange={(e) => setWritter(e.target.value)}
              required
            />
          </div>

          <div className='input-container'>
            <div className='label'>Director</div>
            <input
              type='text'
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              required
            />
          </div>

          <div className='select-container'>
            {genres.map((item, index) => {
              return (
                <div key={index} className='selected'>
                  {item}{" "}
                  <span
                    onClick={() => {
                      const filtered = genres.filter((i) => {
                        return i !== item;
                      });
                      setGenres(filtered);
                    }}
                  >
                    <img src={cancel} alt='' />
                  </span>
                </div>
              );
            })}
          </div>

          <select
            onChange={(e) => {
              handleChange(e);
            }}
            name='genres'
            id='genres'
          >
            <option value='none'>select a genre</option>
            <option value='adventure'>adventure</option>
            <option value='anime'>anime</option>
            <option value='action'>action</option>
            <option value='sci-fi'>sci-fi</option>
            <option value='fantasy'>fantasy</option>
            <option value='cartoon'>cartoon</option>
            <option value='tragedy'>tragedy</option>
            <option value='romance'>romance</option>
            <option value='comedy'>comedy</option>
          </select>

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
