import React from 'react'

export default function FeaturedCards({ item }) {
  return (
    <div className='featured-container'>
      <div className='featured-wrapper'>
          <img className='featured-image' src={item.img1} />
          <img className='featured-image-hover' src={item.img2} />
      </div>
    </div>
  )
}
