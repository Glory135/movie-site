import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../../Utilities";
import { AdminSidebar } from "../AdminComponents/AdminSidebar";

export const AdminSettings = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rePassword === password) {
      const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
      try {
        await axios.post(
          "https://movie-site-5lzl.onrender.com/api/admin/register",
          {
            firstname,
            lastname,
            username,
            email,
            phone,
            gender,
            password,
            image,
          },
          { headers: { authorization: `Bearer ${token}` } }
        );
        navigate("/admin/users");
        notifySuccess("Admin created!!");
      } catch (error) {
        notifyError("ERROR try again");
      }
    } else {
      setPassword("");
      setRePassword("");
      notifyError("Passwords Do Not Match!!");
    }
  };

  const previewPic = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <div className='admin'>
      <div className='admin_side_container'>
        <AdminSidebar />
      </div>
      <div className='admin_main_container'>
        <div className='admin_main_head'>
          <h1>Create New Admin</h1>
        </div>
        <form onSubmit={handleSubmit} className='postForm' autoComplete='off'>
          <div className='input-container'>
            <div className='label'>Username</div>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='input-container'>
            <div className='label'>Firstname</div>
            <input
              type='text'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className='input-container'>
            <div className='label'>Lastname</div>
            <input
              type='text'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className='input-container'>
            <div className='label'>Email</div>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='input-container'>
            <div className='label'>Phone</div>
            <input
              type='number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className='input-container'>
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              aria-label='gender'
              name='gender'
            >
              <FormControlLabel
                value='Male'
                control={<Radio size='small' />}
                label='Male'
              />
              <FormControlLabel
                value='Female'
                control={<Radio size='small' />}
                label='Female'
              />
            </RadioGroup>
          </div>

          <div className='input-container'>
            <div className='label'>Password</div>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='input-container'>
            <div className='label'>Retype Password</div>
            <input
              type='password'
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
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

          {image && (
            <img
              style={{ width: "30px", height: "50px", borderRadius: "50%" }}
              src={image}
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
              CREATE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
