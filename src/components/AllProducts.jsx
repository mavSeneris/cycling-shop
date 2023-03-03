import React from 'react'
import { collections } from "../data"
import ProductCard from './ProductCard'


export default function AllProducts() {
  return (
    <div className='all-products'>
    <img className='accent-image' src="https://images.prismic.io/maap/53a72c2f-e18e-41a2-9343-9e0ac6f90f8a_New+Season+Road_Collection_Ads_man.png?auto=compress,format"/>
      {collections.map((item) => {
        return (<ProductCard key={item.id} item={item}
        />)
      })}
     <img className="accent-image2" src="https://images.prismic.io/maap/bacb33e8-50c8-4d36-bc5b-370e82f03593_New+Season+Road_Collection_Ads_woman.png?auto=compress,format"/> 
    </div>
  )
}
