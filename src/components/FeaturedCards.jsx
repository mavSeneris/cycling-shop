import React from 'react'

export default function FeaturedCards({ item }) {
  console.log(item.featured)
  return (
    <div className='featured-container'>
      <a href={`product/${item.id}`}>
        <div className='featured-wrapper'>
          <img className='featured-image' src={item.img1} />
          <img className='featured-image-hover' src={item.img2} />
        </div>
      </a>

    </div>
  )
}
