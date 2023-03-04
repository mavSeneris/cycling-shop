import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function ProductPage() {
  return (
    <div className='product-page-container'>
      <Navbar />
      <div className='product-container'>
        <div className='product-images'>
          <img src="https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAJ341_MDNVY_Evade_20Pro_20Base_20Jersey_202.0_Midnight_20Navy_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1677035291&w=1920&q=100" />
          <img src="https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAJ341_MDNVY_Evade_20Pro_20Base_20Jersey_202.0_Midnight_20Navy_PDP_ADDITIONAL_IMAGES_02_DESKTOP.jpg%3Fv%3D1677035291&w=1920&q=100" />
          <img src="https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAJ341_MDNVY_Evade_20Pro_20Base_20Jersey_202.0_Midnight_20Navy_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1677035291&w=1920&q=100"/>

        </div>
        <div className="product-details">
          <div className='product-info'>
            <h2>Evolve 3D Pro Air Jersey</h2>
            <p >The Evolve 3D Pro Air Jersey is a high-performance, lightweight jersey featuring bold graphic elements and sustainable materials for the ultimate experience. Design in our signature Pro-Fit with contoured panelling, a low profile collar and longer sleeve length for comfort and performance. Featuring ultra-lightweight mesh side panels, micro-perforated chest and back panels, and air-mesh sleeves for maximum airflow. The lazer cut perforated pockets offer added breathability and moisture-wicking technology to keep you fresh. The material selection includes mostly recycled yarns, OEKO-TEX® certified hem and bluesign® APPROVED fabrications.</p>
            <h3 className='item-price'> $225.00 AUD</h3>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}
