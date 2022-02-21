import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';

function Hero() {
  return (
    <div className="homePage_hero-container">
        <section className="homePage_hero_section section-1">
          <img src="https://picsum.photos/id/1059/650/700/?blur=1" alt="img" class="homePage_hero_section_img" />
        <div className="hero_img-overlay">
          <p className="hero-img-overlay-text">Discover More</p>
          <CgArrowLongRight size="2em" color='white' />
        </div>
        </section>
        <section className="homePage_hero_section section-2">
          <img src="https://picsum.photos/id/1070/650/700/?blur=1" alt="img" class="homePage_hero_section_img" />
        <div className="hero_img-overlay">
          <p className="hero-img-overlay-text">Discover More</p>
          <CgArrowLongRight size="2em" color='white' />
        </div>
        </section>
    </div>
  )
}

export default Hero