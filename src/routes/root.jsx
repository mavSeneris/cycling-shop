import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



export default function Home() {
  const [bag, setBag] = useState(() => JSON.parse(localStorage.getItem('bag')) || [])

  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag])

  return (
    <div className='home'>
      <Navbar bag={bag} setBag={setBag} />
      <Outlet context={[bag, setBag]} />
      <Footer />
    </div>
  )
}
