import React from 'react'
import { collections } from "../data"
import FeaturedCards from './FeaturedCards'

export default function Featured() {
  return (
    <div className='featured'>
      {collections.map((item) => {
        if (item.featured) {
          return (<FeaturedCards item={item} key={item.id} />)
        }
      })}
    </div>
  )
}
