import React from 'react'
import { useNavigate, useLoaderData } from 'react-router-dom'
import MenCollection from '../components/MenCollection'
import { getProducts } from '../api'

export function loader(){
  return getProducts()
}

export default function MenPage() {
  const navigate = useNavigate()
  const products = useLoaderData()

  function handleGoBack() {
    navigate('/')
  }
  return (
    <>
      <div className='backlink'>
        <button onClick={handleGoBack}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
          Back
        </button>
      </div>
      <h1 className='product-title'>MAAV/Men Collections</h1>
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
        {products.map((item) => {
          if (item.category === "men") {
            return <MenCollection key={item.id} item={item} />
          }
        })}
      </div>
    </>

  )
}
