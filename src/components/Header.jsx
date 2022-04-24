import React, { useContext, useState } from "react";
import bars from "../images/icon-bars.svg";
import close from "../images/icon-close.svg";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../App";
import { Image } from "cloudinary-react";

export const Header = ({ setLogOpen, setSignOpen }) => {
  const [mobile, setMobile] = useState(false);
  const { loggedIn, user } = useContext(Context);
  const { pathname } = useLocation();
  const closeOnClick = () => {
    setMobile(false);
  };
  return (
    <>
      <div id='top' className='header'>
        <div className='header-container'>
          <div className='logo-container'>
            {/* <img src={logo} alt='' /> */}
            <h1>
              movie<span>Hunter</span>{" "}
            </h1>
          </div>

          <nav>
            <ul>
              <li
                style={{
                  borderBottom: pathname === "/" && "2px solid #dd003f",
                }}
              >
                <Link className='Link' to='/'>
                  <span>Home</span>
                </Link>
              </li>
              <li
                style={{
                  borderBottom: pathname === "/movies" && "2px solid #dd003f",
                }}
              >
                <Link className='Link' to='/movies'>
                  {" "}
                  <span>Movies</span>
                </Link>
              </li>
              <li
                style={{
                  borderBottom: pathname === "/series" && "2px solid #dd003f",
                }}
              >
                <Link className='Link' to='/series'>
                  <span>Series</span>
                </Link>
              </li>
              <li
                style={{
                  borderBottom: pathname === "/contact" && "2px solid #dd003f",
                }}
              >
                <Link className='Link' to='/contact'>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className='header-log'>
            {loggedIn ? (
              <Link className='Link' to={user.admin ? "/admin" : "/profile"}>
                <div className='log signUp'>
                  {" "}
                  <Image cloudName='drpa7x9bu' publicId={user.image} />
                  {user.admin ? "ADMIN" : "PROFILE"}
                </div>
              </Link>
            ) : (
              <>
                <div onClick={() => setLogOpen(true)} className='log logIn'>
                  LOG IN
                </div>
                <div onClick={() => setSignOpen(true)} className='log signUp'>
                  SIGN UP
                </div>
              </>
            )}
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
          position: mobile ? "relative" : "absolute",
        }}
        className='header-media-nav'
      >
        <nav>
          <ul>
            <li
              style={{
                borderBottom: pathname === "/" && "2px solid #dd003f",
              }}
            >
              <Link className='Link' to='/'>
                <span onClick={() => closeOnClick()}>Home</span>
              </Link>
            </li>
            <li
              style={{
                borderBottom: pathname === "/movies" && "2px solid #dd003f",
              }}
            >
              <Link className='Link' to='/movies'>
                <span onClick={() => closeOnClick()}>Movies</span>
              </Link>
            </li>
            <li
              style={{
                borderBottom: pathname === "/series" && "2px solid #dd003f",
              }}
            >
              <Link className='Link' to='/series'>
                <span onClick={() => closeOnClick()}>Series</span>
              </Link>
            </li>
            <li
              style={{
                borderBottom: pathname === "/contact" && "2px solid #dd003f",
              }}
            >
              <Link className='Link' to='/contact'>
                <span onClick={() => closeOnClick()}>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        {loggedIn ? (
          <Link className='Link' to={user.admin ? "/admin" : "/profile"}>
            <div
              onClick={() => {
                closeOnClick();
              }}
              className='log signUp'
            >
              {" "}
              <Image cloudName='drpa7x9bu' publicId={user.image} />{" "}
              {user.admin ? "ADMIN" : "PROFILE"}
            </div>
          </Link>
        ) : (
          <>
            <div
              onClick={() => {
                closeOnClick();
                setLogOpen(true);
              }}
              className='log logIn'
            >
              LOG IN
            </div>
            <div
              onClick={() => {
                closeOnClick();
                setSignOpen(true);
              }}
              className='log signUp'
            >
              SIGN UP
            </div>
          </>
        )}
      </div>
    </>
  );
};
