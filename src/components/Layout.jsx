import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar"
import Footer from "./Footer"


export default function Layout() {
  //Initialize 'bag' state with data from localStorage or an empty array
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [bag, setBag] = useState(() => JSON.parse(localStorage.getItem('bag')) || [])


  // Update localStorage whenever the 'bag' state changes
  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag])

  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username])


  return (
    <div className='site-wrapper'>
      <Navbar bag={bag} setBag={setBag} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} username={username} />
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
