import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

function FooterFeatures() {
  return (
    <div className="footer-features-container">
        <div className="footer-features_feature feature-1" style={{backgroundColor: 'cyan'}}>
          <div className="footer-features_feature-title">
            <p className="footer-features-title-text">New Trending</p>
            <MdOutlineArrowForwardIos size="2em" color='white' className='footer-features_features_title_arrow-icon arrow-right'/>
          </div>
          <p className="footer-features_feature-desc">This is footer features description</p>
        </div>

        <div className="footer-features_feature feature-2" style={{backgroundColor: 'pink'}}>
          <div className="footer-features_feature-title">
            <p className="footer-features-title-text">New Trending</p>
            <MdOutlineArrowForwardIos size="2em" color='white' className='footer-features_features_title_arrow-icon arrow-right'/>
          </div>
          <p className="footer-features_feature-desc">This is footer features description</p>
        </div>

        <div className="footer-features_feature feature-3" style={{backgroundColor: 'orange'}}>
          <div className="footer-features_feature-title">
            <p className="footer-features-title-text">New Trending</p>
            <MdOutlineArrowForwardIos size="2em" color='white' className='footer-features_features_title_arrow-icon arrow-right'/>
          </div>
          <p className="footer-features_feature-desc">This is footer features description</p>
        </div>
    </div>
  )
}

export default FooterFeatures