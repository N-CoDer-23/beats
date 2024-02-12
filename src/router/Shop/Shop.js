import React from 'react'
import './Shop.css'
import Footer from '../../components/footer/Footer'

function Shop() {

  return (
    <div className='container shop__wrapper'>
      <div className="shop__flex">
      
        <div className="shop__img">
        <img src={"https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/plp/plp-studiopro-black.jpg.large.2x.jpg"} alt="" />
      </div>
      <div className="shop__text">
        <h1>Beats Studio Pro</h1>
        <h2>$349.99</h2>
        <ul>
          <li>High-fidelity lossless audio via USB-Cfootnote1</li>
          <li>Personalized Spatial Audio with dynamic head trackingfootnote2</li>
          <li>Active Noise Cancelling (ANC) and Transparency mode</li>
          <li>Up to 40 hours of listening time (ANC off)footnote3</li>
        </ul>
        <button className='shop__btn'>VIEW DETAILS</button>
      </div>

      </div>

      <div className="shop__flex">
      
        <div className="shop__img">
        <img src={"https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo3-wireless/plp/plp-solo3-rose-gold.jpg.large.2x.jpg"} alt="" />
      </div>
      <div className="shop__text">
        <h1>Beats Solo3 Wireless</h1>
        <h2>$199.95</h2>
        <ul>
          <li>High-fidelity lossless audio via USB-Cfootnote1</li>
          <li>Personalized Spatial Audio with dynamic head trackingfootnote2</li>
          <li>Active Noise Cancelling (ANC) and Transparency mode</li>
          <li>Up to 40 hours of listening time (ANC off)footnote3</li>
        </ul>
        <button className='shop__btn'>VIEW DETAILS</button>
      </div>

      </div>
      <div className="shop__flex">
      
        <div className="shop__img">
        <img src={"https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo3-wireless/plp/plp-solo3wirelessle-gold.jpg.large.2x.jpg"} alt="" />
      </div>
      <div className="shop__text">
        <h1>Beats Fit Pro</h1>
        <h2>$199.99</h2>
        <ul>
          <li>High-fidelity lossless audio via USB-Cfootnote1</li>
          <li>Personalized Spatial Audio with dynamic head trackingfootnote2</li>
          <li>Active Noise Cancelling (ANC) and Transparency mode</li>
          <li>Up to 40 hours of listening time (ANC off)footnote3</li>
        </ul>
        <button className='shop__btn'>VIEW DETAILS</button>
      </div>

      </div>

    <Footer/>
      
    </div>
  )
}

export default Shop