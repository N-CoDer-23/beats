import React from 'react'
import './SingleRoute.css'
import { PRODUCTS } from '../../static'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function SingleRoute() {
    const parms = useParams()
    const oneItem = PRODUCTS.find((el)=> el.id === parms.id)
  return (
    <div className='container singleRoute'>
        <div className="single__img">
        <img src={oneItem.url} alt="" />
        </div>
        <div className="single__text">
        <h1>{oneItem.title}</h1>
        <br />
        <h2>{oneItem.price}</h2>
        <br />
        <div className='color2'>
          <div className="cart__title blac"></div>
          <div className="cart__title red"></div>
          <div className="cart__title pink"></div>
          <div className="cart__title gray"></div>
        </div>
        <Link to={"/"}><button className='single__btn'>Home</button></Link>
            
        </div>
    </div>
  )
}

export default SingleRoute