import React from 'react'
import allProducts from "../data"
import ProductCard from './ProductCard'

export default function All() {
  return (
    <div className='products'>
      {allProducts.map((product) => {
        return <ProductCard product={product.id} key={product.id} />
      })}

    </div>
  )
}
