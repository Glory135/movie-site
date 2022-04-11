import React from "react";
import pic from "../images/test/avatar.jpg";
import { LongAdvert } from "../components/Adverts";
import longAd from "../images/test/ads2.png";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className='profile'>
      <LongAdvert img={longAd} />
      <div className='profile-container'>
        <div className='profile-details-container'>
          <div className='profile-pic-container'>
            <img src={pic} alt='' />
          </div>
          <div className='profile-actions-container'>
            <Link className='Link' to='/profile/favourites'>
              <div className='profile-action'>
                <i className='fa fa-heart'></i>
                Favourites
              </div>
            </Link>
            <div className='profile-action'>
              <i className='fa fa-key'></i>
              Change Password
            </div>
            <div className='profile-action'>
              <i className='fa fa-door-open'></i>
              Log Out
            </div>
          </div>
        </div>
        <div className='profile-edit-container'>
          <div className='head'>
            <h1>Adeyemi Glory's profile</h1>
          </div>
          <form>
            <label>
              <div>Username</div> <input type='text' />
            </label>
            <label>
              <div>Email</div> <input type='email' />
            </label>
            <label>
              <div>Firstname</div> <input type='text' />
            </label>
            <label>
              <div>Lastname</div> <input type='text' />
            </label>
            <label>
              <div>Phone No</div> <input type='number' />
            </label>

            <div className='btn'>Update</div>
          </form>

          <div className='password-update-container'>
            <div className='head'>Change Passord</div>{" "}
            <form className='password-form'>
              <label>
                <div>Password</div> <input type='password' />
              </label>
              <label>
                <div>Retype Password</div> <input type='password' />
              </label>
              <div className='btn'>Update</div>
            </form>
          </div>
        </div>
      </div>
      <LongAdvert img={longAd} />
    </div>
  );
};
