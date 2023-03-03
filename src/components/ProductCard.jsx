import React from 'react'

export default function ProductCard({item}) {
  return (
    <div className='item-card-wrapper'>
      <img className="item-card" src={item.img1}/>
      <img className="item-card-hover" src={item.img2}/>
    </div>
  )
}
