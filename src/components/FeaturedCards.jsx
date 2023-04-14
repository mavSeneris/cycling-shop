import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturedCards({ item }) {

  return (
    <div className='featured-container'>
      <Link to={`collection/product/${item.id}`} >
        <div className='featured-wrapper'>
          <img className='featured-image' src={item.img1} />
          <img className='featured-image-hover' src={item.img2} />
        </div>
      </Link>

    </div>
  )
}
