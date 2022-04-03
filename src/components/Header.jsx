import React, { useState } from "react";
// import logo from "../images/logo.gif";
import avatar from "../images/test/avatar.jpg";
import bars from "../images/icon-bars.svg";
import close from "../images/icon-close.svg";

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <div className='header'>
        <div className='header-container'>
          <div className='logo-container'>
            {/* <img src={logo} alt='' /> */}
            <h1>
              movie<span>Hunter</span>{" "}
            </h1>
          </div>

          <nav>
            <ul>
              <li>
                <span>Home</span>
              </li>
              <li>
                <span>Movies</span>
              </li>
              <li>
                <span>Series</span>
              </li>
              <li>
                <span>Contact</span>
              </li>
            </ul>
          </nav>

          <div className='header-log'>
            {/* <div className='log logIn'>LOG IN</div>
          <div className='log signUp'>SIGN UP</div> */}
            <div className='log signUp'>
              {" "}
              <img src={avatar} alt='' /> PROFILE
            </div>
          </div>
          <div onClick={() => setMobile(!mobile)} className='menu-container'>
            <img src={mobile ? close : bars} alt='' />
          </div>
        </div>
      </div>

      <div
        style={{
          transform: mobile ? "scaleY(1)" : "scaleY(0)",
          height: mobile ? "auto" : "0%",
          padding: mobile ? "20px 0" : "0",
        }}
        className='header-media-nav'
      >
        <nav>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Movies</span>
            </li>
            <li>
              <span>Series</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </nav>
        <div className='log logIn'>LOG IN</div>
        <div className='log signUp'>SIGN UP</div>
        <div className='log signUp'>
          {" "}
          <img src={avatar} alt='' /> PROFILE
        </div>
      </div>
    </>
  );
};
