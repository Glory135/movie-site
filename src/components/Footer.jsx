import React from "react";

export const Footer = () => {
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
                <li>Home</li>
                <li>Movies</li>
                <li>Series</li>
                <li>Contact</li>
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
