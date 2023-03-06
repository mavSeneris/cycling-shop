import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { collections } from '../data'
import { useLocation } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'

export default function ProductPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  // console.log(location.pathname.split("/")[2])


  return (
    <div className='product-page-container'>
      <Navbar />
      {collections.map(item => {

        if (id == item.id) {
          return (<ProductDetail item={item} key={item.id}/>)
        }
      })}
      <Footer />

    </div>
  )
}
