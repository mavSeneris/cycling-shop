import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



export default function Home() {
  const [bag, setBag] = useState([])


  return (
    <div className='home'>
      <Navbar bag={bag} setBag={setBag} />
      <Outlet />
      <Footer />
    </div>
  )
}
