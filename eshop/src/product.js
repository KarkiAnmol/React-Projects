import './product.css';
import React from 'react'

const product = ({id,title,price,rating,image}) => {
  return (
<div className="product">

  <div className="product_info">

    <p>{title} </p>
    <p className='product_price'>Rs.{price}</p>
    <div className="product_rating">{
      Array(rating).
      fill().
      map(()=>(
        <p>⭐</p>
      ))
    }
    </div>
    <img src={image} alt="" />
    <button>Add to Basket</button>
  </div>
</div>  )
}

export default product