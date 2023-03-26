import React, { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  //Initialize 'bag' state with data from localStorage or an empty array
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [bag, setBag] = useState(() => JSON.parse(localStorage.getItem('bag')) || [])
  const location = useLocation()
  const path = location.pathname

  // Update localStorage whenever the 'bag' state changes
  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag])

  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username])
  

  return (
    <div className='home'>
      <Navbar bag={bag} setBag={setBag} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} username={username} />
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
      <Outlet context={
        [
          bag, setBag,
          isLoggedIn, setIsLoggedIn,
          password, setPassword,
          username, setUsername,
        ]
      } />

      <Footer />
    </div>
  )
}