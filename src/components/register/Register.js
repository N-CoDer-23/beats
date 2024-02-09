import React from 'react'
import './Register.css'
import { useLocation } from 'react-router-dom'

function Register() {
  const {pathname} = useLocation()
  if(pathname.includes("shop")){
    return <></>
  }else if(pathname.includes("support")){
    return <></>
  }else if(pathname.includes("product")){
    return <></>
  }
  return (
    <div className='container register'>
        <div className="register__img">
            <img src={"https://www.beatsbydre.com/content/dam/beats/web/home/2022/10/hp-register--fitpro-solo3.png.large.2x.png"} alt="" width={500}/>
        </div>
        <div className="register__text">
            <h1>REGISTER YOUR BEATS</h1>
            <button>REGISTER NOW</button>
        </div>
       
    </div>
  )
}

export default Register