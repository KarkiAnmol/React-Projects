import './product.css';
import React from 'react'

const product = () => {
  return (
<div className="product">

  <div className="product_info">
    
    <p>Title </p>
    <p className='product_price'>$10</p>
    <div className="product_rating">⭐⭐⭐⭐</div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hWyfw6ur2P0QRDcHrgmGIMivwO-e2KjEMYlUK11q5g&s" alt="" />
    <button>Add to Basket</button>
  </div>
</div>  )
}

export default product