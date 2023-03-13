import React, { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Collections from '../components/Collections'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slides from '../components/Slides'



export default function Home() {
  const [bag, setBag] = useState(() => JSON.parse(localStorage.getItem('bag')) || [])
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag])


  const location = useLocation()
  const path = location.pathname

  return (
    <div className='home'>
      <Navbar bag={bag} setBag={setBag} />

      {path === "/" && <div className='welcome'>
        <h2 className='welcome-title'>PURSUE A NEW DIMENSION</h2>
        <img className='welcome-img' src="https://cdn.shopify.com/s/files/1/0419/5939/1399/files/4qChoZT_2048x2048.jpg?v=1601115655" />
        <span className='shop-now'>
          <Link to={'/home'}>
            SHOP <span className='logo'>// MAAV {'>>'}</span>
          </Link>
        </span>

        {/* <Slides/>
        <Collections/>
        <Featured/> */}
      </div>}

      <Outlet context={
        [bag, setBag, isLogin, setIsLogin]
      } />

      <Footer />
    </div>
  )
}
