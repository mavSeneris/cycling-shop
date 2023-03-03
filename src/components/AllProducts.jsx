import React from 'react'
import { collections } from "../data"
import ProductCard from './ProductCard'


export default function AllProducts() {
  return (
    <div className='all-products'>
    <h1 className='product-title'>MAAV Collections</h1>
      <div className='form-container'>
        <form className='form'>
          <select className='sort price'>
            <option value="">Sort</option>
            <option value="option1">Price High to Low</option>
            <option value="option2">Price Low to High</option>
          </select>

          <select className='sort gender'>
            <option value="">Filter</option>
            <option value="option1">Men</option>
            <option value="option2">Woman</option>
          </select>
        </form>
      </div>

      <img className='accent-image' src="https://images.prismic.io/maap/53a72c2f-e18e-41a2-9343-9e0ac6f90f8a_New+Season+Road_Collection_Ads_man.png?auto=compress,format" />
      {collections.map((item) => {
        return (<ProductCard key={item.id} item={item}
        />)
      })}
      <img className="accent-image2" src="https://images.prismic.io/maap/bacb33e8-50c8-4d36-bc5b-370e82f03593_New+Season+Road_Collection_Ads_woman.png?auto=compress,format" />
    </div>
  )
}
