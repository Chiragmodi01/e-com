import React from 'react'

function LoadMore() {
  return (
    <div className="productPage_loadMore-container">
        <div className="loadMore_desc">
            <p className="loadMore_desc_text">Show 18 of 48 Products</p>
            <p className="loadMore_desc_outline">---------------------------------------------</p>
        </div>
        <div className="loadMore_action">
            <button className="loadMore_action_btn">Load More</button>
        </div>
    </div>
  )
}

export default LoadMore