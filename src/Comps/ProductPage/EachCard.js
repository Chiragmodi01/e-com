import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';

function EachCard() {
  return (
    <div className="productPage_each-card-wrapper">
      <div className="productPage_each-card-top">
        <img src="https://picsum.photos/id/129/290/290/?blur=1" alt="img" class="productPage_card-img" />
        <FaHeart viewBox='0 0 512 555' size="1.5em" className='each-card_img-overlay icon-heart' />
        <MdOutlineArrowForwardIos size="1em" className='each-card_img-overlay icon-arrow arrow-right'/>
        <MdOutlineArrowBackIosNew size="1em" className='each-card_img-overlay icon-arrow arrow-left'/>
      </div>
      <div className="productPage_each-card-section-bottom">
        <p className="productPage_card-desc">Xyz Jacket With Leather Details</p>
        <p className="productPage_card-price">$999</p>
        <p className="productPage_card-badge">New Collection</p>
      </div>
    </div>
  )
}

export default EachCard