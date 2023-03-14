import React, { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [isLogin, setIsLogin] = useState(false);
  // Initialize 'bag' state with data from localStorage or an empty array
  const [bag, setBag] = useState(() => JSON.parse(localStorage.getItem('bag')) || [])
  const location = useLocation()
  const path = location.pathname

  // Update localStorage whenever the 'bag' state changes
  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag])

  return (
    <div className='home'>
      {/* Render the Navbar component and pass 'bag' and 'setBag' props */}
      <Navbar bag={bag} setBag={setBag} />

      {/* Render a welcome message and image only when the path is '/' */}
      {path === "/" && <div className='welcome'>
        <h2 className='welcome-title'>PURSUE A NEW DIMENSION</h2>
        <img className='welcome-img' src="https://cdn.shopify.com/s/files/1/0419/5939/1399/files/4qChoZT_2048x2048.jpg?v=1601115655" alt="Welcome" />
        <span className='shop-now'>
          {/* Render a link to '/home' and a logo */}
          <Link to={'/home'}>
            SHOP <span className='logo'>// MAAV {'>>'}</span>
          </Link>
        </span>
      </div>}

      {/* Render the Outlet component and pass 'bag' and 'setBag' as context */}
      <Outlet context={
        [
          bag,
          setBag,
        ]
      } />

      {/* Render the Footer component */}
      <Footer />
    </div>
  )
}
