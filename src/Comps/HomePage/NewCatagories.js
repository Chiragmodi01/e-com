import React from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';

function NewCategories() {
  return (
    <div className="homePage_new-categories-container" style={{backgroundColor: 'yellow'}}>
        <div className="homePage_new-categories_section section-1">
          <img src="https://picsum.photos/id/1078/674/630/?blur=1" alt="img" class="new-categories_section_main_img" />
        </div>
        <div className="homePage_new-categories_section section-2">
          <div className="new-categories_section-2_header">
            <p className="new-categories_section-2_header-title">This my Brand name</p>
            <p className="new-categories_section-2_header-subtitle">The Collection is available exclusively online,</p>
            <p className="new-categories_section-2_header-action">Shop now</p>  
          </div>
          <div className="new-categories_section-2_main">
            <MdOutlineArrowBackIosNew size="1em" color='black' className='new-categories_section-2_main-arrow-icon arrow-left'/>
            <img src="https://picsum.photos/id/1081/350/300/?blur=1" alt="img" class="new-categories_section_main_img" />
            <MdOutlineArrowForwardIos size="1em" color='black' className='new-categories_section-2_main-arrow-icon arrow-right'/>
          </div>
          <div className="new-categories_section-2_bottom">
          <p className="new-categories_section-2_bottom-product-name">This my Pdt name</p>
          <p className="new-categories_section-2_bottom-product-price">$999</p>
          <p className="new-categories_section-2_bottom-product-index">. . . .</p>
          </div>
        </div>
    </div>
  )
}

export default NewCategories