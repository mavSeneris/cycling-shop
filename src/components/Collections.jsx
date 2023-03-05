import React from 'react'

export default function Collections() {
  return (
    <div className='collections'>
      <div className='category-wrapper'><a href={`/women`}>
        <img src="https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-WAJ217_WHT_Women_s_20Transfer_20Pro_20Air_20Jersey_White_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1675052753&w=1920&q=100" />
        <div className='category-women'>WOMEN</div>
      </a>

      </div>

      <div className='category-wrapper'>
        <a href={`/men`}>
          <img src="https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAJ351_BLK_Emerge_20Ultralight_20Pro_20Jersey_Black_PDP_ADDITIONAL_IMAGES_02_DESKTOP.jpg%3Fv%3D1675208389&w=1920&q=100" />
          <div className='category-men'>MEN</div>
        </a>
      </div>
    </div>
  )
}
