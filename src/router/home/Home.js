import React from 'react'
import Banner from '../../components/banner/Banner'
import Cart from '../../components/main/Cart'
import ShopApple from '../../components/shopping/ShopApple'
import BannerBot from '../../components/banner-bot/BannerBot'
import Phone from '../../components/phone/Phone'
import Register from '../../components/register/Register'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
        <Banner/>
        <Cart/>
        <ShopApple/>
        <BannerBot/>
        <Phone/>
        <Register/>
        <Footer/>
    </div>
  )
}

export default Home