import React from 'react'
import './Cart.css'
import { PRODUCTS } from '../../static'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Cart() {
  const {pathname} = useLocation()
  if(pathname.includes("shop")){
    return <></>
  }else if(pathname.includes("support")){
    return <></>
  }else if(pathname.includes("product")){
    return <></>
  }
  return (
    <div className='container cart'>
        <h1>Popular Now</h1>
        <div className="carts">
        {
          PRODUCTS?.map((el)=> <div key={el.id} className="cart_title">
              <Link to={`/product/${el.id}`}>
                <h2>{el.title}</h2>
                <h3>{el.price}</h3>
                <img src={el.url} alt="" />
                <div className='color'>
                  <div className="cart__title blac"></div>
                  <div className="cart__title red"></div>
                  <div className="cart__title pink"></div>
                  <div className="cart__title gray"></div>
                </div>
              </Link>
            </div>)
        }

        </div>
        
        
    </div>
  )
}

export default Cart
