import React, { useState } from 'react'
import { useNavigate, useLoaderData, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../api'

export function loader() {
  return getProducts()
}

export default function AllProducts() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const products = useLoaderData()
 
  const [sortedProducts, setSortedProducts] = useState(products);
  const categoryFilter = searchParams.get("category")

  

  function handleClick(order) {
    const sorted = products.slice().sort((a, b) => {
      if (order === 'highToLow') {
        return b.price - a.price;
      } else if (order === 'lowToHigh') {
        return a.price - b.price;
      } else {
        throw new Error('Invalid order parameter');
      }
    });
    setSortedProducts(sorted);
  }

  function handleReset() {
    setSortedProducts(products);
  }


  const displayedProducts = categoryFilter
    ? sortedProducts.filter(product => product.category === categoryFilter)
    : sortedProducts

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  function handleGoBack() {
    navigate('/')
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
      <button onClick={() => handleFilterChange("category", "men")} value="option1">All</button>

      <div className='form-container'>
        <form className='form-select'>
          <select className='sort price'>
            <option onClick={() => handleReset()} value="">Sort</option>
            <option onClick={() => handleClick('highToLow')} value="option1">Price High to Low</option>
            <option onClick={() => handleClick('lowToHigh')} value="option2">Price Low to High</option>
            <option onClick={() => handleReset()} value="option2">Reset Prices</option>

          </select>

          <select className='sort gender'>
            <option value="">Filter</option>
            <option onClick={() => handleFilterChange("category", "")} value="option1">All</option>
            <option onClick={() => handleFilterChange("category", "men")} value="option1">Men</option>
            <option onClick={() => handleFilterChange("category", "women")} value="option2">Woman</option>
            <option onClick={() => handleFilterChange("category", "accessories")} value="option3">Accessories</option>
          </select>
          </form>
      </div>

      <img className='accent-image' src="https://images.prismic.io/maap/53a72c2f-e18e-41a2-9343-9e0ac6f90f8a_New+Season+Road_Collection_Ads_man.png?auto=compress,format" />
      {displayedProducts.map((item) => {
        return (<ProductCard
          key={item.id}
          item={item}
        />)
      })}
      <img className="accent-image2" src="https://images.prismic.io/maap/bacb33e8-50c8-4d36-bc5b-370e82f03593_New+Season+Road_Collection_Ads_woman.png?auto=compress,format" />
    </div>
  )
}
