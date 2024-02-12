import React from 'react'
import './Support.css'
import Footer from '../../components/footer/Footer'



function Support() {

  return (
    <div className='container support__wrapper'>
      <h1>BEATS SUPPORT</h1>
      <div className="support__collection">
        <div className="support__img">
          <img src={"https://www.beatsbydre.com/content/dam/beats-support/global/images/product-category/support-headphones-macro.jpg.large.2x.jpg"} alt="" />
          <p>STUDIO PRO</p>
          <p>STUDIO3 WIRELESS</p>
          <p>SOLO WIRELESS</p>
          <p>BEATS EP</p>
          <p>BEATS PRO</p>
          
        </div>
        <div className="support__img">
          <img src={"https://www.beatsbydre.com/content/dam/beats-support/global/images/product-category/studiobudsplus-product.jpg.large.2x.jpg"} alt="" />
          <p>STUDIO PRO</p>
          <p>STUDIO3 WIRELESS</p>
          <p>SOLO WIRELESS</p>
          <p>BEATS EP</p>
          <p>BEATS PRO</p>
          <p>POWERBEATS PRO</p>
          <p>BEATS</p>
          <p>POWERBEATS EP</p>
          <p>BEATS PRO x</p>
        </div>
        <div className="support__img">
          <img src={"https://www.beatsbydre.com/content/dam/beats-support/global/images/product-category/beats-speakers-product.png.large.2x.png"} alt="" />
          <p>BEATS PILL+</p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Support