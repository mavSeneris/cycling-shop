import React from 'react'
import Collections from '../components/Collections'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slides from '../components/Slides'


export default function Home({isLogin}) {
  return (
    <div className='home'>
      <Navbar isLogin={isLogin}/>
      <Slides/>
      <Collections/>
      <Featured/>
      <Footer/>
    </div>
  )
}
