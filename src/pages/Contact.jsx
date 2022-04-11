import React from "react";
import { LongAdvert } from "../components/Adverts";
import longAd from "../images/test/ads2.png";

export const Contact = () => {
  return (
    <div className='contact'>
      <LongAdvert img={longAd} />
      <div className='contact-head'>
        <h1>Contact Us</h1>
      </div>
      <div className='contact-container'>
        <div className='contact-main-container'>
          <form>
            <label>
              <div>Email:</div>
              <input type='text' placeholder='enter email here....' />
            </label>
            <label>
              <div> Subject:</div>
              <input type='text' placeholder='enter subject here....' />
            </label>
            <label>
              <div> Message:</div>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='enter message here....'
              ></textarea>
            </label>
            <div className='btn'>SEND</div>
          </form>
        </div>
        <div className='contact-side-container'>
          <div className='social-container'>
            <div className='first'>
              <i className='fab fa-facebook '></i> Facebook
            </div>
            <div className='second'>
              <i className='fab fa-instagram '></i> Instagram
            </div>
            <div className='third'>
              <i className='fa fa-mail-bulk '></i> Mail
            </div>
            <div className='forth'>
              {" "}
              <i className='fab fa-telegram '></i> Telegram
            </div>
            <div className='fifth'>
              {" "}
              <i className='fab fa-twitter '></i> Twitter
            </div>
            <div className='sixth'>
              {" "}
              <i className='fab fa-whatsapp '></i> Whatsapp
            </div>
            <div className='seventh'>
              <i className='fab fa-pinterest '></i> Pinterest
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
