import React from 'react'
import './BannerBot.css'
import { useLocation } from 'react-router-dom'

function BannerBot() {
  const {pathname} = useLocation()
  if(pathname.includes("shop")){
    return <></>
  }else if(pathname.includes("support")){
    return <></>
  }else if(pathname.includes("product")){
    return <></>
  }
  return (
    <div className='container banner_bot'>
       <div className="text__bannerbot">
        <h1>Beats</h1>
        <h1>Studio Buds +</h1>
        <h4>Powerful Sound. Perfect Fit.</h4>
        <button className='btn_bot'>SHOP</button>
       </div>
    </div>
  )
}

export default BannerBot