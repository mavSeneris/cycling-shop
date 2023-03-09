import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductsDetail({ item }) {
  const location = useLocation()
  const productId = location.pathname.slice()[9]

  function addToCart(id) {
    if (productId == id)
      alert("added to shopping bag!")
      // Shopping bag logic goes here.
  }

  return (
    <div>
      <div className='product-container'>
        <div className='product-images'>
          <img src={item.img1} />
          <img src={item.img2} />
        </div>
        <div className="product-details">
          <div className='product-info'>
            <h2 className='item-name'>{item.name}</h2>
            <p className='item-description'>The Evolve 3D Pro Air Jersey is a high-performance, lightweight jersey featuring bold graphic elements and sustainable materials for the ultimate experience. Design in our signature Pro-Fit with contoured panelling, a low profile collar and longer sleeve length for comfort and performance. Featuring ultra-lightweight mesh side panels, micro-perforated chest and back panels, and air-mesh sleeves for maximum airflow. The lazer cut perforated pockets offer added breathability and moisture-wicking technology to keep you fresh. The material selection includes mostly recycled yarns, OEKO-TEX® certified hem and bluesign® APPROVED fabrications.</p>
            <h3 className='item-price'> ${item.price}.00 AUD</h3>
            <button onClick={() => addToCart(item.id)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
