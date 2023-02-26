import React from 'react'

export default function FeaturedCards({ item }) {
  return (
    <div className='featured-container'>
      <div className='featured-wrapper'>
          <img src={item.img1} />
      </div>
    </div>
  )
}
