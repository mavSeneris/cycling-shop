import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Collections from '../components/Collections'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slides from '../components/Slides'



export default function Home() {
  const [bag, setBag] = useState([])


  return (
    <div className='home'>
      <Navbar bag={bag} setBag={setBag} />
      {/* <Slides />
      <Collections />
      <Featured /> */}

      {/* eto un! */}
      <Outlet />


      <Footer />
    </div>
  )
}
