import React, { useState, useEffect } from 'react'
import FeaturedCards from './FeaturedCards'

export default function Featured() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`/api/products/`)
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])


  return (
    <div className='featured'>
      <h2 className='featured-title'>New Releases</h2>
      {products.map((item) => {
        if (item.featured) {
          return (<FeaturedCards item={item} key={item.id} />)
        }
      })}
    </div>
  )
}
