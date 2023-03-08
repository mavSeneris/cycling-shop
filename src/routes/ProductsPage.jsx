import React, {useState} from 'react'
import AllProducts from '../components/AllProducts'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'




export default function ProductsPage() {
const [shoppingBag, setShoppingBag]= useState([])

  return (
    <div>
      <Navbar shoppingBag={shoppingBag}/>
      <AllProducts/>
      <Footer/>
    </div>
  )
}
