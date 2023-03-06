import React from 'react'
import { collections } from "../data"
import FeaturedCards from './FeaturedCards'

export default function Featured() {

  
  return (
    <div className='featured'>
    <h2 className='featured-title'>New Releases</h2>
      {collections.map((item) => {
        if (item.featured) {
          return (<FeaturedCards item={item} key={item.id} />)
        }
      })}
    </div>
  )
}
