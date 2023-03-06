import React from 'react'
import { collections } from '../data'
import WomenCollections from '../components/WomenCollections'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function WomenPage() {
  return (
    <>
      <Navbar/>
      <h1 className='product-title'>MAAV/Women Collections</h1>
      <div className='form-container'>
        <form className='form-select'>
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
      <div className='all-products'>
        {collections.map((item) => {
          if (item.category === "women") {
            return <WomenCollections key={item.id} item={item} />
          }
        })}
      </div>
      <Footer/>
    </>

  )
}
