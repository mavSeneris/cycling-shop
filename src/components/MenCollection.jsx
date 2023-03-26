import React from 'react'
import { Link } from 'react-router-dom'

export default function MenCollections({ item }) {
  return (
    <div className='item-card-wrapper'>
      <Link to={`product/${item.id}`}>
        <img className="item-card" src={item.img1} />
        <img className="item-card-hover" src={item.img2} />
        <span className='product-name'>{item.name}</span>
        <span className='product-price'>${item.price}.00 US</span>
        
      </Link>
    </div>
  )
}
