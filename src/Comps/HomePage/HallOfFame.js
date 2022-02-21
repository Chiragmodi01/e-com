import React from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';

function HallOfFame() {
  return (
    <div className="homePage_hall-of-fame-container" style={{backgroundColor: 'black'}}>
    <div className="homePage_hall-of-fame_header">
            World of My Brand
    </div>
    <div className="homePage_hall-of-fame_main">
        <div className="homePage_hall-of-fame_pills">
            <p className="hall-of-fame_pill">Pill 1</p>
            <p className="hall-of-fame_pill">Pill 2</p>
            <p className="hall-of-fame_pill">Pill 3</p>
            <p className="hall-of-fame_pill">Pill 4</p>
            <p className="hall-of-fame_pill">Pill 5</p>
            <p className="hall-of-fame_pill">Pill 6</p>
            <p className="hall-of-fame_pill">Pill 7</p>
        </div>
        <div className="homePage_hall-of-fame_main_cards-container">
            <MdOutlineArrowBackIosNew size="1em" color='black' className='hall-of-fame_main_images_arrow-icon arrow-left'/>
            <div className="homePage_hall-of-fame_main_cards-wrapper">
                <div className="homePage_hall-of-fame_main_image-wrapper">
                    <img src="https://picsum.photos/id/1059/500/700/?blur=1" className="homePage_hall-of-fame_main_image" />
                    <div className="hall-of-fame_main_image-overlay">
                        <p className="hall-of-fame_main_image-overlay_title">Fashion show</p>
                        <p className="hall-of-fame_main_image-overlay_desc">Men's fall winter 22 fashion show</p>
                        <p className="hall-of-fame_main_image-overlay_action">Discover more</p>
                    </div>
                </div>
                <div className="homePage_hall-of-fame_main_image-wrapper">
                    <img src="https://picsum.photos/id/1059/500/700/?blur=1" className="homePage_hall-of-fame_main_image" />
                    <div className="hall-of-fame_main_image-overlay">
                        <p className="hall-of-fame_main_image-overlay_title">Fashion show</p>
                        <p className="hall-of-fame_main_image-overlay_desc">Men's fall winter 22 fashion show</p>
                        <p className="hall-of-fame_main_image-overlay_action">Discover more</p>
                    </div>
                </div>
                <div className="homePage_hall-of-fame_main_image-wrapper">
                    <img src="https://picsum.photos/id/1059/500/700/?blur=1" className="homePage_hall-of-fame_main_image" />
                    <div className="hall-of-fame_main_image-overlay">
                        <p className="hall-of-fame_main_image-overlay_title">Fashion show</p>
                        <p className="hall-of-fame_main_image-overlay_desc">Men's fall winter 22 fashion show</p>
                        <p className="hall-of-fame_main_image-overlay_action">Discover more</p>
                    </div>
                </div>
                <div className="homePage_hall-of-fame_main_image-wrapper">
                    <img src="https://picsum.photos/id/1059/500/700/?blur=1" className="homePage_hall-of-fame_main_image" />
                    <div className="hall-of-fame_main_image-overlay">
                        <p className="hall-of-fame_main_image-overlay_title">Fashion show</p>
                        <p className="hall-of-fame_main_image-overlay_desc">Men's fall winter 22 fashion show</p>
                        <p className="hall-of-fame_main_image-overlay_action">Discover more</p>
                    </div>
                </div>
            </div>
            <MdOutlineArrowForwardIos size="1em" color='black' className='hall-of-fame_main_images_arrow-icon arrow-right'/>
        </div>
    </div>
    <div className="homePage_hall-of-fame_bottom">
        <p className="homePage_hall-of-fame_bottom-action">Discover World</p>
    </div>
</div>
  )
}

export default HallOfFame