import React from 'react'
import './ShopApple.css'
import { useLocation } from 'react-router-dom'


function ShopApple() {
    const {pathname} = useLocation()
    if(pathname.includes("shop")){
      return <></>
    }else if(pathname.includes("support")){
      return <></>
    }else if(pathname.includes("product")){
      return <></>
    }
  return (
    <div className='container shopping'>
        <h1>Seamless Shopping Through Apple</h1>
        <div className="shoppnig__wrapper">
            <div className="shopping__card">
                <img src={"https://www.beatsbydre.com/content/dam/beats/web/common/icons/apple-value-props/free-shipping-icon-hp-vp.png.large.2x.png"} alt="" />
                <h2>Fast and Free Delivery</h2>
                <p>Enjoy free two-day delivery on most in-stock items.</p>
                <br />
                <a href=""><h3>Learn More</h3></a>
            </div>
            <div className="shopping__card">
                <img src={"https://www.beatsbydre.com/content/dam/beats/web/common/icons/apple-value-props/in-store-pickup-icon-hp-vp.png.large.2x.png"} alt="" />
                <h2>Fast and Free Delivery</h2>
                <p>Enjoy free two-day delivery on most in-stock items.</p>
                <br />
                <a href=""><h3>Learn More</h3></a>
            </div>
            <div className="shopping__card">
                <img src={"https://www.beatsbydre.com/content/dam/beats/web/common/icons/apple-value-props/easy-returns-icon-hp-vp.png.large.2x.png"} alt="" className='shopping__bottom'/>
                <h2>Fast and Free Delivery</h2>
                <p>Enjoy free two-day delivery on most in-stock items.</p>
                <br />
                <a href=""><h3>Learn More</h3></a>
            </div>
            
        </div>

    </div>
  )
}

export default ShopApple