import React from 'react';
import './Navbar.css'; 
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <div className="container">

   
    <div className='navbar'>
       <div className='navbar__logo'>
        <Link to={'/'}> <img src={"https://www.beatsbydre.com/content/dam/beats/global/logos/beats-logo-161616.png"} alt="" /></Link>
       </div>

       <div className='navbar__rout'>
        <Link to={'/shop'}><h3>Shop</h3></Link>
        <Link to={'/support'}><h3>Support</h3></Link>
       </div>
       <div className='navbar__icon'>
       <IoSearchSharp />
       </div>
     
    </div>



    </div>
  );
};

export default Navbar;