import React, { useContext, useState, useRef } from "react";
import { LongAdvert } from "../components/Adverts";
import longAd from "../images/test/ads2.png";
import { Link } from "react-router-dom";
import { logOut, notifyError, notifySuccess } from "../Utilities";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Image } from "cloudinary-react";

export const Profile = () => {
  const { setLoggedIn, user, setUser } = useContext(Context);

  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [pic, setPic] = useState("");

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();
  const passwordRef = useRef();

  // useEffect(() => {
  //   if (loggedIn) {
  //     navigate("/profile");
  //   } else {
  //     navigate("/");
  //     notifyWarning("Login Frist!!!");
  //   }
  // }, [loggedIn, navigate]);

  const handleFirst = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
    if (token) {
      try {
        await axios.put(
          "https://movie-site-5lzl.onrender.com/api/users/update",
          { firstname, lastname, username, email, phone },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        notifySuccess("Profile Details Updated Successfully!!");
      } catch (error) {
        notifyError("ERROR try again!!!");
      }
    } else {
      notifyError("ERROR try again!!!");
    }
  };
  const handleSecond = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
    if (token) {
      try {
        await axios.put(
          "https://movie-site-5lzl.onrender.com/api/users/update/password",
          { oldPassword: password, newPassword },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        notifySuccess("Password Successfully Updated!!");
        setPassword("");
        setNewPassword("");
      } catch (error) {
        notifyError("ERROR try again!!!");
      }
    } else {
      notifyError("ERROR  !!!");
    }
  };
  const previewPic = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPic(reader.result);
    };
  };
  const handleChange = async (e) => {
    const file = e.target.files[0];
    previewPic(file);

    const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));
    if (token) {
      try {
        await axios.put(
          "https://movie-site-5lzl.onrender.com/api/users/update",
          { image: pic },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        notifySuccess("Picture Updated Successfully!!");
      } catch (error) {
        notifyError("ERROR try again!!!");
      }
    } else {
      notifyError("ERROR try again!!!");
    }
  };
  return (
    <div className='profile'>
      <LongAdvert img={longAd} />
      <div className='profile-container'>
        <div className='profile-details-container'>
          <div className='profile-pic-container'>
            <div className='img-main-container'>
              <Image cloudName='drpa7x9bu' publicId={user.image} />
              <label htmlFor='pp' className='img-changer'>
                change pic
              </label>
              <input
                type='file'
                onChange={(e) => handleChange(e)}
                name='pp'
                id='pp'
              />
            </div>
          </div>
          <div className='profile-actions-container'>
            <Link className='Link' to='/profile/favourites'>
              <div className='profile-action'>
                <i className='fa fa-heart'></i>
                Favourites
              </div>
            </Link>
            <div
              onClick={() => (passwordRef.current.autofocus = true)}
              className='profile-action'
            >
              <i className='fa fa-key'></i>
              Change Password
            </div>
            <div
              onClick={() => {
                logOut(setLoggedIn, setUser);
                navigate("/");
              }}
              className='profile-action'
            >
              <i className='fa fa-door-open'></i>
              Log Out
            </div>
          </div>
        </div>
        <div className='profile-edit-container'>
          <div className='head'>
            <h1>
              {user.username}'<sup>s</sup> profile
            </h1>
          </div>
          <form onSubmit={handleFirst}>
            <label>
              <div>Username</div>{" "}
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type='text'
              />
            </label>
            <label>
              <div>Email</div>{" "}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
              />
            </label>
            <label>
              <div>Firstname</div>{" "}
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type='text'
              />
            </label>
            <label>
              <div>Lastname</div>{" "}
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type='text'
              />
            </label>
            <label>
              <div>Phone No</div>{" "}
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type='number'
              />
            </label>

            <button type='submit' className='btn'>
              Update
            </button>
          </form>

          <div className='password-update-container'>
            <div className='head'>Change Passord</div>{" "}
            <form onSubmit={handleSecond} className='password-form'>
              <label>
                <div>Old Password</div>{" "}
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  ref={passwordRef}
                />
              </label>
              <label>
                <div>New Password</div>{" "}
                <input
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  type='password'
                />
              </label>
              <button type='submit' className='btn'>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
      <LongAdvert img={longAd} />
    </div>
  );
};
