import React from 'react'

function Boutique() {
  return (
    <div className="homePage_boutique-container" style={{backgroundColor: 'tomato'}}>
        <img src="https://picsum.photos/id/129/1000/300/?blur=1" className="homePage_boutique_img" />
        <div className="homePage_boutique_desc">
            <p className="homePage_boutique_desc-title">Book your appointment in our boutiques</p>
            <p className="homePage_boutique_desc-action">Discover the closest store to you</p>
        </div>
    </div>
  )
}

export default Boutique