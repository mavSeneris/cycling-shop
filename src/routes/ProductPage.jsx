import React from 'react'
import { collections } from '../data'
import { useLocation } from 'react-router-dom'
import ProductDetail from '../routes/ProductDetail'

export default function ProductPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2]

  return (
    <div className='product-page-container'>
      {collections.map(item => {
        if (id == item.id) {
          return (<ProductDetail item={item} key={item.id} />)
        }
      })}
    </div>
  )
}
