import React from 'react'
import Collections from '../components/Collections'
import Featured from '../components/Featured'
import Slides from '../components/Slides'


export default function Home() {
  return (
    <div className='home'>
      <Slides/>
      <Collections/>
      <Featured/>
    </div>
  )
}