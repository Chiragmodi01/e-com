import React from 'react';
import { IoLocationOutline, IoClose } from 'react-icons/io5';
import { BiUser, BiHeart, BiShoppingBag, BiSearch } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';

function Header() {
  return (
    <header>
        <div className="header">
            <div className="header_top-container">
              <div className="header_top_location">
                <IoLocationOutline className="icon-map-pin" size="1.25em"/>
                <p className="header_top_location_name">Rajasthan, India</p>
              </div>
              <div className="header_top_actions-wrapper">
                <p className="header_top_action action-1">Find a store</p>
                <p className="header_top_action action-2">Contact Us</p>
              </div>
            </div>
            <nav className="header_main-container">
              <div className="header_main_brand-name">Brand</div>
              <div className="header_main_nav-pills-wrapper">
                <h5 className="header_main_nav-pill">pill1</h5>
                <h5 className="header_main_nav-pill">pill2</h5>
                <h5 className="header_main_nav-pill">pill3</h5>
                <h5 className="header_main_nav-pill">pill4</h5>
                <h5 className="header_main_nav-pill">pill5</h5>
              </div>
              <div className="header_main_nav-actions-wrapper">
                <div className="header_main_nav-search-wrapper">
                  <BiSearch size="1.5em" />
                  <input type="text" placeholder='search' className='header_main_nav-search-box'/>
                </div>
                <div className="header_main_nav-action-icons-wrapper">
                  <BiUser className="header_main_nav-action-icon icon-user" size="1.5em"/>
                  <FaRegHeart className="header_main_nav-action-icon icon-wishlist" size="1.5em"/>
                  <BiShoppingBag className="header_main_nav-action-icon icon-bag" size="1.5em"/>
                </div>
              </div>
            </nav>
            <div className="header_promotional-container">
              <p className="header_promotional_text">Checkout our new cool collection</p>
              <IoClose className="header_promotional_icon-dismiss" size="1.5em"/>
            </div>
        </div>
    </header>
  )
}

export default Header