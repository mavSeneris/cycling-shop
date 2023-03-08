import React from 'react'
import Collections from '../components/Collections'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slides from '../components/Slides'


export default function Home() {
  return (
    <div className='home'>
      {/* <Navbar/> */}
      <Slides/>
      <Collections/>
      <Featured/>
      {/* <Footer/> */}
    </div>
  )
}
