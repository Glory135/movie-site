import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-first-container'>
          <div className='logo-container'>
            <h1>
              movie<span>Hunter</span>
            </h1>
          </div>
          <div className='socials-container'>
            <i className='fab fa-facebook'></i>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-pinterest'></i>
            <i className='fab fa-whatsapp'></i>
          </div>
          <p>&copy; 2022 movieHunter</p>
        </div>
        <div className='footer-second-container'>
          <div className='links-container'>
            <h1>Quick links</h1>
            <nav>
              <ul>
                <Link className='Link' to='/'>
                  <li
                    style={{
                      border: pathname === "/" && "2px solid #dd003f",
                      color: pathname === "/" && "#dd003f",
                    }}
                  >
                    Home
                  </li>
                </Link>
                <Link className='Link' to='/movies'>
                  {" "}
                  <li
                    style={{
                      border: pathname === "/movies" && "2px solid #dd003f",
                      color: pathname === "/movies" && "#dd003f",
                    }}
                  >
                    Movies
                  </li>
                </Link>
                <Link className='Link' to='/series'>
                  {" "}
                  <li
                    style={{
                      border: pathname === "/series" && "2px solid #dd003f",
                      color: pathname === "/series" && "#dd003f",
                    }}
                  >
                    Series
                  </li>
                </Link>
                <Link className='Link' to='/contact'>
                  {" "}
                  <li
                    style={{
                      border: pathname === "/contact" && "2px solid #dd003f",
                      color: pathname === "/contact" && "#dd003f",
                    }}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
            </nav>
          </div>{" "}
          <div className='up-container'>
            <a href='#top'>
              <div title='Back To Top' className='up'>
                <i className='fa fa-arrow-up'></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
