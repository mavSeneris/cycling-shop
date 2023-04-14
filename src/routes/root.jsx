// import React, { useState, useEffect } from 'react'
// import { Outlet, Link, useLocation } from 'react-router-dom'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'

// export default function Home() {
//   //Initialize 'bag' state with data from localStorage or an empty array
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [bag, setBag] = useState(() => JSON.parse(localStorage.getItem('bag')) || [])
//   const location = useLocation()
//   const path = location.pathname

//   // Update localStorage whenever the 'bag' state changes
//   useEffect(() => {
//     localStorage.setItem('bag', JSON.stringify(bag));
//   }, [bag])

//   useEffect(() => {
//     localStorage.setItem('username', JSON.stringify(username));
//   }, [username])
  

//   return (
//     <div className='home'>
//       <Navbar bag={bag} setBag={setBag} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} username={username} />
//       {/* Render a welcome message and image only when the path is '/' */}
//       {path === "/" && <div className='welcome'>
//         <h2 className='welcome-title'>PURSUE A NEW DIMENSION</h2>
//         <img className='welcome-img' src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t1.6435-9/174260825_1897406373776610_5815923568521374055_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2c4854&_nc_eui2=AeGQmMD3uXcKqdVyoQK8Wl0l8eqp7-_wRXjx6qnv7_BFeK5REv_r87PdLbS8Gf_xrXY&_nc_ohc=gO7sjmxq0mYAX-8pBPY&_nc_ht=scontent.fmnl25-3.fna&oh=00_AfC59HNyFY-xZZwYayOHyg2_01b2W6sExe2MhT2dNkPXdA&oe=644A1E6B" alt="Welcome" />
//         <span className='shop-now'>
//           {/* Render a link to '/home' and a logo */}
//           <Link to={'/home'}>
//             SHOP <span className='logo'>// MAAV {'>>'}</span>
//           </Link>
//         </span>
//       </div>}
//       <Outlet context={
//         [
//           bag, setBag,
//           isLoggedIn, setIsLoggedIn,
//           password, setPassword,
//           username, setUsername,
//         ]
//       } />

//       <Footer />
//     </div>
//   )
// }