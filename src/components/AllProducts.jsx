import React from 'react'
import { useNavigate } from 'react-router-dom'
import { collections } from "../data"
import ProductCard from './ProductCard'



export default function AllProducts() {
  
  const navigate = useNavigate()
  console.log(location)

  function handleGoBack() {
    navigate('/home')
  }

  return (
    <div className='all-products'>
      <div className='backlink'>
        <button onClick={handleGoBack}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
          Back
        </button>
      </div>
      <h1 className='product-title'>MAAV Collections</h1>
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

      <img className='accent-image' src="https://images.prismic.io/maap/53a72c2f-e18e-41a2-9343-9e0ac6f90f8a_New+Season+Road_Collection_Ads_man.png?auto=compress,format" />
      {collections.map((item) => {
        return (<ProductCard
          key={item.id}
          item={item}
        />)
      })}
      <img className="accent-image2" src="https://images.prismic.io/maap/bacb33e8-50c8-4d36-bc5b-370e82f03593_New+Season+Road_Collection_Ads_woman.png?auto=compress,format" />
    </div>
  )
}
