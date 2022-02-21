import React from 'react'

function TrendingHim() {
  return (
    <div className="homePage_trendingHim-container" style={{backgroundColor: 'darkturquoise'}}>
        <div className="homePage_trendingHim_section section-1">
            <div className="homePage_trendingHim_video-header">
                <p className="homePage_trendingHim_video-header_heading">Men's summer 2022 collection</p>
                <p className="homePage_trendingHim_video-header_sub-heading">Summer 2022 brings a breath of optimism and lightness Bold and casual, Hermès men defy gravity and define their own perspectives.</p>
                <p className="homePage_trendingHim_video-header_action">Discover the collection</p>
            </div>
            <div className="trendingHim_section-1_video-container">
                <video width="1000" height="500" poster='https://picsum.photos/id/1029/1000/500/?blur=1' controls className='trendingHim_section-1_video'>
                    <source src="src" type="video/mp4" />
                    <source src="src" type="video/ogg" />
                </video>
            </div>
        </div>

        <div className="homePage_trendingHim_section section-2">
            <div className="homePage_trendingHim_collection-header">
            <p className="homePage_trendingHim_collection-header_heading">Brand name collection</p>
                <p className="homePage_trendingHim_collection-header_sub-heading">Inspired by a dog collar, the pyramid-shaped Médor detail and pattern was used on a Hermès bracelet in 1927.</p>
                <p className="homePage_trendingHim_collection-header_action">Stud your style</p>
            </div>
            <div className="trendingHim_section_collection">
                <div className="trendingHim_section_collection_section section-1"></div>
                <div className="trendingHim_section_collection_item item-1">
                <img src="https://picsum.photos/id/1078/490/625/?blur=1" alt="img" class="trendingHim_collection-img" />
                </div>
                <div className="trendingHim_section_collection_item item-2">
                <img src="https://picsum.photos/id/1074/245/240/?blur=1" alt="img" class="trendingHim_collection-img" />
                <div className="trendingHim_collection_desc">
                    <p className="trendingHim_collection_product-name">This is pdt name</p>
                    <p className="trendingHim_collection_product-prive">$999</p>
                </div>
                </div>
                <div className="trendingHim_section_collection_item item-3">
                <img src="https://picsum.photos/id/1074/245/240/?blur=1" alt="img" class="trendingHim_collection-img" />
                <div className="trendingHim_collection_desc">
                    <p className="trendingHim_collection_product-name">This is pdt name</p>
                    <p className="trendingHim_collection_product-prive">$999</p>
                </div>
                </div>
                <div className="trendingHim_section_collection_item item-4">
                <img src="https://picsum.photos/id/1074/245/240/?blur=1" alt="img" class="trendingHim_collection-img" />
                <div className="trendingHim_collection_desc">
                    <p className="trendingHim_collection_product-name">This is pdt name</p>
                    <p className="trendingHim_collection_product-prive">$999</p>
                </div>
                </div>
                <div className="trendingHim_section_collection_item item-5">
                <img src="https://picsum.photos/id/1074/245/240/?blur=1" alt="img" class="trendingHim_collection-img" />
                <div className="trendingHim_collection_desc">
                    <p className="trendingHim_collection_product-name">This is pdt name</p>
                    <p className="trendingHim_collection_product-prive">$999</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrendingHim