import React from 'react'
import './Footer.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoPlaystation } from "react-icons/io5";
import { FaCcMastercard } from "react-icons/fa6";
import { useLocation } from 'react-router-dom'
import { SlEnvolopeLetter } from "react-icons/sl";

function Footer() {
  const {pathname} = useLocation()
  if(pathname.includes("product")){
      return <></>
  }
  return (
    <div className='container footer__wrapper' >
      <div className="footer__top__title">
        <div className="footer__top">
        <SlEnvolopeLetter />
        <h2>Join Our List</h2>
        <p>Don’t miss a beat. Stay up to date on the latest products, collabs and more.</p>
        <input type="text" placeholder='Email addres'/>
      </div>

      </div>

      <div className="footer__bottom">
        <div className="footer__collection">
          <ul>
            <h3>Products</h3>
            <li>Product Support</li>
            <li>Contact Support</li>
            <li>Shipping Information</li>
            <li>Refund Policy</li>
            <li>HP/HYPERXTerms of Use</li>
          </ul>
          <ul>
            <h3>Support</h3>
            <li>Product Support</li>
            <li>Contact Support</li>
            <li>Shipping Information</li>
            <li>Refund Policy</li>
            <li>Visual Content</li>
            <li>Terms of Use</li>
            <li>Limited Statement</li>
            <li>Accessibility</li>
            <li>Use of Cookies</li>
            <li>Personal Data Rights</li>
            <li>Terms of Service</li>
          </ul>
          <ul>
            <h3>Company</h3>
            <li>Product Support</li>
            <li>Contact Support</li>
            <li>Terms of Service</li>
            <br />
            <h3>Legal</h3>
            <li>Visual Content</li>
            <li>Terms of Use</li>
            <li>Limited Warranty</li>
            <li>Accessibility</li>
            <li>Use of Cookies</li>
            <li>Personal Data Rights</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer__logo">
          <h3>Location</h3>
          <div className="united">
            <p>United | Change</p>
          </div>
          <br />
          <h3>Follow Us</h3>
          <FaSquareFacebook />
          <FaYoutube />
        <IoLogoPlaystation />
        <FaCcMastercard />
        </div>

      </div>
      
    
    </div>
  )
}

export default Footer