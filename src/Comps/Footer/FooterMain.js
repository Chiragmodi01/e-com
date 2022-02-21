import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

function FooterMain() {
  return (
    <div className="footer-main" style={{backgroundColor: 'tomato'}}>
      <div className="footer-main_top">
        <p className="footer-main_brand">Brand</p>
        <div className="footer-main_pills-section">
          <p className="footer-main_pill-title">Legal</p>
          <p className="footer-main_pill">Trending</p>
          <p className="footer-main_pill">Trending</p>
          <p className="footer-main_pill">Trending</p>
          <p className="footer-main_pill">Trending</p>
          <p className="footer-main_pill">Trending</p>
        </div>
        <div className="footer-main_pills-section">
          <p className="footer-main_pill-title">Legal</p>
          <p className="footer-main_pill">Trending</p>
          <p className="footer-main_pill">Trending</p>
          <p className="footer-main_pill">Trending</p>
        </div>
        <div className="footer-main_pills-section">
          <p className="footer-main_pill-title">Legal</p>
          <p className="footer-main_pill">Trending</p>
          <p className="footer-main_pill">Trending</p>
          <p className="footer-main_pill">Trending</p>
          <p className="footer-main_pill">Trending</p>
        </div>
        <div className="footer-main_contact-section">
          <p className="footer-main_contact-section_subscribe">Please subscribe us to know more</p>
          <div className="footer-main_contact-wrapper">
            <input type="email" name="email" id="subscribe-input" placeholder='Enter your e-mail'/>
            <label htmlFor="subscribe-input">Subsscribe</label>
          </div>
        </div>
      </div>
      <div className="footer-main_mid-cards-wrapper">
        --accepted cards--
      </div>
      <div className="footer-main_bottom">
        <p className="footer-main_bottom_text">2021 - All fking rights are reserved of this brand mf, so you better not use it.</p>
        <div className="footer-main_bottom_socials">
          <FaFacebookF size="1.2em"/>
          <FaTwitter size="1.2em"/>
          <FaPinterestP size="1.2em"/>
          <FaLinkedinIn size="1.2em"/>
          <FaInstagram size="1.2em"/>
          <FaYoutube size="1.2em"/>
        </div>
      </div>
    </div>
  )
}

export default FooterMain