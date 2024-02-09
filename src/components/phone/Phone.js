import React from 'react'
import './Phone.css'
import { useLocation } from 'react-router-dom'

function Phone() {
    const {pathname} = useLocation()
    if(pathname.includes("shop")){
      return <></>
    }else if(pathname.includes("support")){
      return <></>
    }else if(pathname.includes("product")){
      return <></>
    }
  return (
    <div className='container phone__wrapper'>
        <div className="phone__cart">
            <h2>Collaborations</h2>
            <p>Explore one-of-a-kind, limited-edition product collabs.</p>
            <img src={"https://www.beatsbydre.com/content/dam/beats/web/home/2023/12/stussy-hp-cardtile.jpg"} alt="" />
        </div>
        <div className="phone__cart">
            <h2>Collaborations</h2>
            <p>Explore one-of-a-kind, limited-edition product collabs.</p>
            <img src={"https://www.beatsbydre.com/content/dam/beats/web/home/2022/10/hp-cc-promos--find-your-beats.png"} alt="" />
        </div>
        <div className="phone__cart">
            <h2>Collaborations</h2>
            <p>Explore one-of-a-kind, limited-edition product collabs.</p>
            <img src={"https://www.beatsbydre.com/content/dam/beats/web/home/engraving/hp-cc-promos-engraving.png"} alt="" />
        </div>
        <div className="phone__cart">
            <h2>Collaborations</h2>
            <p>Explore one-of-a-kind, limited-edition product collabs.</p>
            <img src={"https://www.beatsbydre.com/content/dam/beats/web/home/2024/01/hp-cc-promos-apple-music-promo.jpg"} alt="" />
        </div>
        
    </div>
  )
}

export default Phone